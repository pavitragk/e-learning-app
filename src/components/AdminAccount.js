import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUserAccount, startStudentRegister } from '../actions/usersAction'

import swal from '@sweetalert/with-react';
import EditForm from './EditForm';
import { Container, Typography } from '@mui/material';




const AdminAccount = (props) => {


    // const [username, setUserName] = useState("")
    // const [role, setRole] = useState("")
    // const [academy, setAcademy] = useState("")
    // const [website, setWebsite] = useState("")
    const [toggle, setToggle] = useState(false)
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(startUserAccount())

    }, [])


    const user = useSelector((state) => {
        return state.users.data
    })

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Container style={{ margin: "100px" }} sx={{ m: 2 }} component="main" maxWidth="xs">
            <div>
                {toggle ? (
                    <>
                        <EditForm username={user?.[0]?.username}
                            role={user?.[0].role}
                            academy={user?.[0]?.academy?.name}
                            website={user?.[0]?.academy?.website}
                            email={user?.[0]?.email}
                            handleToggle={handleToggle}
                        />


                    </>



                ) :
                    (
                        <div>
                            <Typography variant="h6" gutterBottom component="div">username: {user?.[0]?.username}</Typography>
                            <Typography variant="h6" gutterBottom component="div">email: {user?.[0]?.email}</Typography>
                            <Typography variant="h6" gutterBottom component="div">role: {user?.[0].role}</Typography>
                            <Typography variant="h6" gutterBottom component="div">academy: {user?.[0]?.academy?.name}</Typography>
                            <Typography variant="h6" gutterBottom component="div">website: {user?.[0]?.academy?.website}</Typography>

                        </div>
                    )}

                {!toggle && <button onClick={handleToggle}>edit</button>}
                <br />
                <br />

            </div >

        </Container>

    )

}

export default AdminAccount
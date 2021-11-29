import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUserAccount } from '../actions/usersAction'

import swal from '@sweetalert/with-react';
import EditForm from './EditForm';




const AdminAccount = (props) => {

    const [username, setUserName] = useState("")
    const [role, setRole] = useState("")
    const [academy, setAcademy] = useState("")
    const [website, setWebsite] = useState("")
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


    // console.log("acc", user?.[0])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, role, academy, website)



    }



    const handleStudentInput = (e) => {
        if (e.taregt.name === "userName") {
            setname(e.target.value)
        } else if (e.taregt.name === "email") {
            setEmail(e.taregt.value)
        } else if (e.taregt.name === "password") {
            setPassword(e.taregt.value)
        }


    }

    const handleStudentAccount = (e) => {
        e.preventDefault()
        const formData = {


        }

    }

    const handleStudent = () => {
        swal(
            <div>
                <form onSubmit={handleStudentAccount}>
                    <label>student name: </label>
                    <input name="studentName" value={name} onChange={handleStudentInput}></input>
                    <br />
                    <label>email: </label>
                    <input name="emial" value={email} onChange={handleStudentInput}></input>
                    <br />
                    <label>password: </label>
                    <input name="password" value={password} onChange={handleStudentInput}></input>
                    <br />
                    <br />
                    <button>add</button>
                </form>
            </div>
        )
            .then((value) => {
                swal(`You typed: ${value}`);
            });


    }



    return (
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
                        <h1>username : {user?.[0]?.username}</h1>
                        <h2>email: {user?.[0]?.email}</h2>
                        <h2>role: {user?.[0].role}</h2>
                        <h3>academy: {user?.[0]?.academy?.name}</h3>
                        <h3>website: {user?.[0]?.academy?.website}</h3>
                    </div>
                )}

            {!toggle && <button onClick={handleToggle}>edit</button>}
            <br />
            <br />

            <button onClick={handleStudent}>Add student</button>

        </div >
    )

}

export default AdminAccount
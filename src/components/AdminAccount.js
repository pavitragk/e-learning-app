import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUserAccount } from '../actions/usersAction'


const AdminAccount = (props) => {

    const [username, setUserName] = useState("")
    const [role, setRole] = useState("")
    const [academy, setAcademy] = useState("")
    const [website, setWebsite] = useState("")
    const [toggle, setToggle] = useState(false)

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

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUserName(e.target.value)
        } else if (e.target.name === "role") {
            setRole(e.target.value)
        } else if (e.target.name === "academy") {
            setAcademy(e.target.value)
        } else if (e.target.name === "website") {
            setWebsite(e.target.value)
        }

    }

    return (
        <div>
            {toggle ? (
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input onChange={handleChange} name="username" value={username}></input><br />
                    <label>Role: </label>
                    <input onChange={handleChange} name="role" value={role}></input><br />
                    <label>Academy: </label>
                    <input onChange={handleChange} name="academy" value={academy}></input><br />
                    <label>Website: </label>
                    <input onChange={handleChange} name="website" value={website}></input><br />


                </form>
            ) :
                (
                    <div>
                        <h1>username : {user?.[0]?.username}</h1>
                        <h2>role : {user?.[0].role}</h2>
                        <h3>academy: {user?.[0]?.academy?.name}</h3>
                        <h3>website:{user?.[0]?.academy?.website}</h3>
                    </div>
                )}

            <button onClick={handleToggle}>edit</button>
            <br />
            <br />

            {/* <button onClick={handleStudent}>Add student</button> */}

        </div >
    )

}

export default AdminAccount
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startUpdateUser } from '../actions/usersAction'



const EditForm = (props) => {
    const dispatch = useDispatch()
    const { username: initialName, role: initialRole, academy: initialAcademy, website: initialWebsite, email: initialEmail, handleToggle } = props
    const [username, setUsername] = useState(initialName ? initialName : "")
    const [email, setEmail] = useState(initialEmail ? initialEmail : "")
    const [role, setRole] = useState(initialRole ? initialRole : "")
    const [academy, setAcademy] = useState(initialAcademy ? initialAcademy : "")
    const [website, setWebsite] = useState(initialWebsite ? initialWebsite : "")



    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)

        } else if (e.target.name === "role") {
            setRole(e.target.value)
        } else if (e.target.name === "academy") {
            setAcademy(e.target.value)
        } else if (e.target.name === "website") {
            setWebsite(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            username: username,
            academy: {
                name: academy,
                website: website
            }
        }
        dispatch(startUpdateUser(formData))
        handleToggle()

        // console.log("edit", formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input onChange={handleChange} name="username" value={username} /><br />
            <label>Email: </label>
            <input onChange={handleChange} email="email" value={email} />
            <label>Role: </label>
            <input onChange={handleChange} name="role" value={role} /><br />
            <label>Academy: </label>
            <input onChange={handleChange} name="academy" value={academy} /><br />
            <label>Website: </label>
            <input onChange={handleChange} name="website" value={website} /><br />
            <button>Save</button>
        </form>
    )

}

export default EditForm
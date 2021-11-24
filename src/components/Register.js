import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Register = (props) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")


    const handleChange = (e) => {

        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setpassword(e.target.value)
        } else if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "website") {
            setWebsite(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <h2>Register here</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username" value={username} onChange={handleChange} /><br />
                <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} /><br />
                <input type="text" placeholder="password" name="password" value={password} onChange={handleChange} /><br />
                <input type="text" placeholder="name" name="name" value={name} onChange={handleChange} /> <br />
                <input type="text" placeholder="website" name="website" value={website} onChange={handleChange} /><br />
                <button >Register</button>

            </form>
            if already registered login here <Link to="/login">Admin login</Link>
        </div>
    )

}

export default Register

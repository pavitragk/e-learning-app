import React, { useState } from 'react'
import { startUserLogin } from '../actions/usersAction'
import { useDispatch } from 'react-redux'

const Login = (props) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }
        dispatch(startUserLogin(formData, props))


    }
    return (
        <div>
            <h2>Login here</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} /><br />
                <input type="text" placeholder="password" name="password" value={password} onChange={handleChange} /><br />
                <button>login</button>
            </form>
        </div>
    )

}

export default Login
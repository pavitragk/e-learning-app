import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startStudentRegister, startGetStudents } from '../actions/usersAction'
import StudentTable from './StudentTable'



const StudentsForm = (props) => {
    const { handleClick } = props
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allow, setAllow] = useState(true)

    const [toggle, setToggle] = useState(false)
    // useEffect(() => {

    //     dispatch(startGetStudents())
    // }, [])

    // const handleClick = () => {
    //     setToggle(!toggle)
    // }


    const handleChange = (e) => {

        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)

        } else if (e.target.name === "allow") {
            setAllow(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            password: password,
            isAllowed: allow

        }

        dispatch(startStudentRegister(formData, props))
        handleClick()


    }
    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" name="name" value={name} onChange={handleChange} /><br />
                    <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} /><br />
                    <input type="text" placeholder="password" name="password" value={password} onChange={handleChange} /><br />
                    isAllowed<input type="radio" value={allow} name="allow" />
                    <br />

                    <button >Register</button>

                </form>

            </div>



        </div>
    )
}

export default StudentsForm
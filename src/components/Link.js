import React from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';


const LinkRoute = (props) => {
    const { handleAuth, isUserLoggedIn } = props

    const user = useSelector((state) => {
        return state.users.user
    })
    return (
        <div>

            {isUserLoggedIn
                ? (<div>
                    <Link onClick={() => {
                        localStorage.clear()
                        alert("successfully logged out")
                        handleAuth()
                    }} to="/">Logout</Link>
                    {user?.role === 'student' ? (
                        <Link to="/dashboard">Dashboard</Link>
                    ) :
                        <div>
                            <Link to="/adminAccount">MyAccount</Link>
                            <br />
                            <Link to="/dashboard">Dashboard</Link>
                            <br />
                            <Link to="/students">students</Link>
                            <br />
                        </div>

                    }

                    <br />

                </div>

                )
                : < div >
                    <Link to="/">Admin</Link><br />
                    <Link to="/studentLogin">Student</Link>
                    {/* <Link to='/home'>Home</Link> */}
                </div>

            }




        </div >

    )

}

export default LinkRoute
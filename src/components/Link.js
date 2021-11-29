import React from 'react'
import { Link } from 'react-router-dom'


const LinkRoute = (props) => {
    const { handleAuth, isUserLoggedIn } = props

    return (

        <div>
            {isUserLoggedIn ? (<div>
                <Link onClick={() => {
                    localStorage.clear()
                    alert("successfully logged out")
                    handleAuth()
                }} to="/">Logout</Link>
                <br />
                <Link to="/adminAccount">MyAccount</Link>
                <br />
                <Link to="/dashboard">Dashboard</Link>
            </div>)
                : (
                    <div>
                        <Link to="/">Admin</Link><br />
                        <Link to="/login">Student</Link>
                        {/* <Link to='/home'>Home</Link> */}
                    </div>
                )}




        </div>

    )

}

export default LinkRoute
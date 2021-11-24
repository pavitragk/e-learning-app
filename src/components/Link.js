import React from 'react'
import { Link } from 'react-router-dom'


const LinkRoute = () => {

    return (

        <div>
            <Link to="/">Admin</Link><br />
            <Link to="/login">Student</Link>

        </div>

    )

}

export default LinkRoute
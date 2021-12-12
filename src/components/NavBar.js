import React from 'react'
import LinkRoute from './Link'
import Router from './Router'
import { withRouter } from 'react-router'
import Toolbar from "@mui/material/Toolbar";




const NavBar = (props) => {
    const { isUserLoggedIn, handleAuth } = props
    return (
        <div>


            <LinkRoute handleAuth={handleAuth} isUserLoggedIn={isUserLoggedIn} />
            <Router handleAuth={handleAuth} isUserLoggedIn={isUserLoggedIn} />

        </div >
    )

}

export default withRouter(NavBar)
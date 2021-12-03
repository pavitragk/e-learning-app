import React from 'react'
import { Route } from 'react-router-dom'

import AdminAccount from './AdminAccount'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import StudentContainer from './StudentContainer'
import StudentLogin from './StudentLogin'
import { useSelector } from 'react-redux'


const Router = (props) => {
    const { handleAuth, isUserLoggedIn } = props
    const user = useSelector((state) => {
        return state.users.user
    })

    if (user) {
        console.log("user", user)
    }



    return (

        <div>


            {isUserLoggedIn ? (

                <div>
                    <Route path="/dashboard" component={Dashboard} exact={true} />
                    <Route path="/adminAccount" component={AdminAccount} exact={true} />
                    <Route path="/students" component={StudentContainer} exact={true} />

                </div>
            )

                :
                <>
                    <Route path="/" component={Register} exact={true} />
                    <Route path="/login" render={(props) => {
                        return <Login
                            {...props}
                            handleAuth={handleAuth}
                        />

                    }} />
                    <Route path="/studentLogin" render={(props) => {
                        return <StudentLogin
                            {...props}
                            handleAuth={handleAuth}
                        />

                    }} />



                </>

            }

        </div >
    )

}

export default Router
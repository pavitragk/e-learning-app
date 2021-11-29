import React from 'react'
import { Route } from 'react-router-dom'
import AdminAccount from './AdminAccount'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'


const Router = (props) => {
    const { handleAuth, isUserLoggedIn } = props

    return (
        <div>
            {isUserLoggedIn ? (
                <div>
                    <Route path="/dashboard" component={Dashboard} exact={true} />
                    <Route path="/adminAccount" component={AdminAccount} exact={true} />
                </div>
            )
                : (
                    <>
                        <Route path="/" component={Register} exact={true} />
                        <Route path="/login" render={(props) => {
                            return <Login
                                {...props}
                                handleAuth={handleAuth}
                            />

                        }} />


                    </>
                )
            }

        </div>
    )

}

export default Router
import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Login from './LogIn'

class UsersContainer extends Component {
    render() {
        return(
            <div>
                <Login />
                <SignUp />
            </div>
        )
    }
}

export default UsersContainer 
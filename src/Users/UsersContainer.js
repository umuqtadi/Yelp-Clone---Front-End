import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'


class UsersContainer extends Component {
    render() {
        return(
            <div>
                <LogIn />
                <SignUp />
            </div>
        )
    }
}

export default UsersContainer 
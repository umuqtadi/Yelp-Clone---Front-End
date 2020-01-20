import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordCheck: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        //Will have function that creates a new user upon sign up
    }

    render() {
        return(
            <div>
                <h2>Sign Up:</h2>
                    <form onSubmit={ this.onSubmit } >
                        <input 
                            type='text'
                            name='username' 
                            style={{flex: '10', padding: '5px'}}
                            placeholder='Username'
                            value={ this.state.username }
                            onChange={ this.onChange }
                        />
                        <input
                            type="text"
                            name='email' 
                            style={{flex: '10', padding: '5px'}}
                            placeholder='Email'
                            value={ this.state.email }
                            onChange={ this.onChange }
                        />
                        <input 
                            type='text'
                            name='password' 
                            style={{flex: '10', padding: '5px'}}
                            placeholder='Password'
                            value={ this.state.password }
                            onChange={ this.onChange }
                        />
                        <input 
                            type='text'
                            name='passwordCheck' 
                            style={{flex: '10', padding: '5px'}}
                            placeholder='Re-enter Password'
                            value={ this.state.passwordCheck }
                            onChange={ this.onChange }
                        />
                        <button type='submit' style={btnStyle}>Save</button>
                    </form>
            </div>
        )
    }
}


const btnStyle = {
    background: 'black',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default SignUp
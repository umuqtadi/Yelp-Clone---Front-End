import React, { Component } from 'react'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        //Would have function to log in user upon submitting this resume

    }

    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return(
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.onSubmit} style={{display: 'flexbox'}}>
                    <input 
                        type='text'
                        name='username' 
                        style={{flex: '10', padding: '5px'}}
                        placeholder='Username'
                        value={ this.state.username }
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

export default Login
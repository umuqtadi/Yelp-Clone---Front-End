import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Navi.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Navi extends Component {
    render(){
        return(
            <div style={{display: 'flex'}}>
                <div>
                    <header>
                        <h1 className="logo">You Hungry Fam?</h1>
                        <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                        <nav>
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/restaurants">Restaurants</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/login">Log In/Sign Up</Link></li>
                            </ul>
                        </nav>
                        <label for="nav-toggle" className="nav-toggle-label">
                            <span></span>
                        </label>
                    </header>
                </div>
                <div className='search'>
                    <Form inline>
                        <FormControl type="text" placeholder="What you want?" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </div>
          </div>
        )
    }
}

export default Navi
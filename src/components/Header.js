import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class Header extends Component {
    
    render() {
        return(
            <header>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">You Hungry Fam?</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#RestaurantsContainer">Restaurants</Nav.Link>
                    <Nav.Link href="#pricing">Log In/Sign Up</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="What you got on my 40?" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </header>
        )
    }
}

export default Header
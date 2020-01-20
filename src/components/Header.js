import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import RestaurantsContainer from '../Restaurants/RestaurantsContainer';
// import RestaurantsContainer from '../Restaurants/RestaurantsContainer'
// import CategoriesContainer from '../Categories/CategoriesContainer';
// import Login from '../Users/LogIn';
// import TopContainer from '../containers/TopContainer';


class Header extends Component {
    
    render() {
        return(
            <header>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">You Hungry Fam?</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home#">Home</Nav.Link>
                        <Nav.Link href='/restaurants#'>Restaurants</Nav.Link>
                        <Nav.Link href="/categories#">Categories</Nav.Link>
                        <Nav.Link href="/login#">Log In</Nav.Link>
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
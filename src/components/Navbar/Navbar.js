import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" style={{ marginLeft: "50px" }} placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav style={{marginLeft:"20px"}}>
                        <Nav.Link>Electronics</Nav.Link>
                        <Nav.Link>Health Care</Nav.Link>
                        <Nav.Link>Clothes</Nav.Link>
                        <Nav.Link>Entertainment</Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Nav>
                <Nav>
                    <Nav.Link href="#cart"><i class="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }} ></i></Nav.Link>
                    <Nav.Link href="#home">Sign In</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};

export default NavBar;
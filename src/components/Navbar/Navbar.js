import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navItems = ["Electronics", "Health Care", "Clothing", "Entertainment"]

const showNavItems = () => navItems.map(item => <NavDropdown title={item} id="basic-nav-dropdown">
    <NavDropdown.Item>Action</NavDropdown.Item>
    <NavDropdown.Item>Another action</NavDropdown.Item>
    <NavDropdown.Item>Something</NavDropdown.Item>
    <NavDropdown.Item>Separated link</NavDropdown.Item>
</NavDropdown>)

const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>E-Shop</Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" style={{ marginLeft: "50px" }} placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav style={{ marginLeft: "20px" }}>
                        {showNavItems()}
                    </Nav>
                </Nav>
                <Nav>
                    <Nav.Link href="#cart"><i className="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }} ></i></Nav.Link>
                    <Nav.Link href="#home">Sign In</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};

export default NavBar;
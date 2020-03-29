import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Axios from 'axios';

class NavBar extends Component {
    state = {
        Electronics: [],
        HealthCare: [],
        Clothing: [],
        Entertainment: [],
        subItemActive: false
    }

    navItems = ["Electronics", "HealthCare", "Clothing", "Entertainment"]

    loadNavSubItems = () => {
        this.navItems.forEach(item => {
            Axios.get("http://localhost:4000/api/subCategory/" + item)
                .then(response => {
                    let oldState = { ...this.state }
                    oldState[item] = response.data.SUCCESS
                    this.setState(oldState)
                })
                .catch(error => console.log(error))
        })
    }

    renderSubCategories = (category) => {
        if (this.state[category].length > 0) {
            return this.state[category].map(item => 
            <LinkContainer to={"/product/"+item.name+"/"+item._id} key={item._id}>
                <NavDropdown.Item  id={item._id} active={this.state.subItemActive}>
                    {item.name}
                </NavDropdown.Item>
            </LinkContainer>)
        } else {
            return <div>No Items</div>
        }
    }

    renderNavItems = () => this.navItems.map(item =>
        <NavDropdown title={item} id="basic-nav-dropdown" key={item}>
            {this.renderSubCategories(item)}
        </NavDropdown>)

    componentDidMount() {
        this.loadNavSubItems();
    }

    render() {
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
                            {(this.state.Electronics.length > 0) ? this.renderNavItems() : "Loading..."}
                        </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart"><i className="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }} ></i></Nav.Link>
                        <LinkContainer  to="/login"><Nav.Link>Log In</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
};

export default NavBar;
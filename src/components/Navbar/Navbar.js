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
        subItemActive: false,
    }

    navItems = ["Electronics", "Clothing", "Entertainment"]

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
                <LinkContainer to={"/product/" + item.name + "/" + item._id} key={item._id}>
                    <NavDropdown.Item id={item._id} active={this.state.subItemActive}>
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
        let auth = null
        if (localStorage.getItem("userName")) {
            auth = <NavDropdown title={localStorage.getItem('userName')} style={{marginRight: "25px"}}>
                <LinkContainer to="/orders" activeClassName="dropdown-item">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/" activeClassName="dropdown-item">
                    <NavDropdown.Item onClick={() => this.props.logOut()}>Logout</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>
        } else {
            auth = <LinkContainer to={{
                pathname: "/login",
                myProps: {
                    logIn: this.props.logIn
                }
            }} style={{marginRight: "25px"}}><Nav.Link>Log In</Nav.Link></LinkContainer>
        }
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
                        <LinkContainer to="/cart"><Nav.Link active={this.state.subItemActive}><i className="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }} ></i></Nav.Link></LinkContainer>
                        {auth}
                    </Nav>
                </Navbar>
            </div>
        )
    }
};

export default NavBar;
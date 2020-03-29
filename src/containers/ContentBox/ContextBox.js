import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductList from './ProductList/ProductList';
import Login from './LoginPage/Login';
import Register from './RegisterPage/Register';

class ContextBox extends Component {
    state = {
        showProductList: true
    }

    onShowDetails = () => {
        this.setState({ showProductList: false })
    }

    render() {
        return (
            <Container fluid>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={FeaturedProducts}
                    />
                    <Route
                        exact
                        path="/login"
                        render={props => <Login {...props}/>}
                    />
                    <Route
                        exact
                        path="/register"
                        component={Register}
                    />
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductDetails}
                    />
                    <Route
                        exact
                        path="/product/:name/:id"
                        component={ProductList}
                    />
                </Switch>
            </Container>)
    }
}

export default ContextBox;

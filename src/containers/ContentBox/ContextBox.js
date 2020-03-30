import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductList from './ProductList/ProductList';
import Login from './LoginPage/Login';
import Register from './RegisterPage/Register';
import Cart from './Cart/Cart';

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
                        render={props => <Login {...props} />}
                    />

                    <Route
                        exact
                        path="/register"
                        component={Register}
                    />

                    <Route
                        exact
                        path="/product/:id"
                        render={props => <ProductDetails {...props} isLoggedIn={this.props.isLoggedIn} logIn={this.props.logIn}/>}
                    />

                    <Route
                        exact
                        path="/product/:name/:id"
                        component={ProductList}
                    />

                    <Route
                        exact
                        path="/cart"
                        render={() =>
                            this.props.isLoggedIn ? (
                                <Cart />
                            ) : (
                                    <Redirect to={{
                                        pathname: "/login",
                                        myProps: {
                                            logIn: this.props.logIn,
                                            from: "/cart"
                                        }
                                    }
                                    } />
                                )
                        }
                    />
                </Switch>
            </Container>)
    }
}

export default ContextBox;

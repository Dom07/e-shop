import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductList from './ProductList/ProductList';
import Login from './LoginPage/Login';
import Register from './RegisterPage/Register';
import Cart from './Cart/Cart';
import Checkout from './CheckoutPage/CheckoutPage';
import Orders from './Orders/Orders';
import WriteReview from './WriteReview/WriteReview';
import AddProduct from './AddProduct/AddProduct';

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
                        render={props => <Register {...props} {...this.props} />}
                    />

                    <Route
                        exact
                        path="/product/:id"
                        render={props => <ProductDetails {...props} isLoggedIn={this.props.isLoggedIn} logIn={this.props.logIn} />}
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
                            localStorage.getItem('userName') ? (
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

                    <Route
                        exact
                        path="/checkout"
                        render={(props) =>
                            localStorage.getItem('userName') ? (
                                <Checkout {...props} />
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

                    <Route
                        exact
                        path="/orders"
                        render={(props) =>
                            localStorage.getItem('userName') ? (
                                <Orders {...props} />
                            ) : (
                                    <Redirect to={{
                                        pathname: "/login",
                                        myProps: {
                                            logIn: this.props.logIn,
                                            from: "/orders"
                                        }
                                    }
                                    } />
                                )
                        }
                    />

                    <Route
                        exact
                        path="/writeReview/:product_id"
                        render={(props) =>
                            localStorage.getItem('userName') ? (
                                <WriteReview {...props} />
                            ) : (
                                    <Redirect to={{
                                        pathname: "/login",
                                        myProps: {
                                            logIn: this.props.logIn,
                                            from: "/orders"
                                        }
                                    }
                                    } />
                                )
                        }
                    />

                    <Route
                        exact
                        path="/addNewProduct"
                        component={AddProduct}
                    />


                </Switch>
            </Container>)
    }
}

export default ContextBox;

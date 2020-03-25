import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ProductDetails from './ProductDetails/ProductDetails';

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
                        path="/product/:id"
                        component={ProductDetails}
                    />
                </Switch>
            </Container>)
    }
}

export default ContextBox;

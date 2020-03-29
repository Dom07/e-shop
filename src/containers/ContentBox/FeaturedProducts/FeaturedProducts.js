import React, { Component } from 'react';
import axios from 'axios';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

class FeaturedProducts extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/product/all")
            .then(products => {
                this.setState({ products: products.data.SUCCESS })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div style={{ marginTop: "20px" }}>
                <FeaturedProduct name="Electronics"/>
                <FeaturedProduct name="Health Care"/>
                <FeaturedProduct name="Clothing"/>
                <FeaturedProduct name="Entertainment"/>
            </div>
        )
    }
};

export default FeaturedProducts;
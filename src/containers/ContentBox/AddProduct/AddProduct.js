import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

class AddProduct extends Component {
    state = {
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        subCategory: "",
        image: "",
        categories: [],
        subCategories: []
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/api/subCategory/")
            .then(res => {
                if (res.data.SUCCESS) {
                    this.setState({
                        categories: res.data.SUCCESS
                    })
                }
            })
            .catch(error => console.log(error))

        Axios.get("http://localhost:4000/api/category/")
            .then(res => {
                if (res.data.SUCCESS) {
                    this.setState({
                        subCategories: res.data.SUCCESS
                    })
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Container style={{ width: "40%", marginTop: "20px", overflowY: "auto" }}>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeHolder="Enter Product Name"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeHolder="Enter Product Description"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value="Select Category">
                            <option>Item 1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="subCategory">
                        <Form.Label>Sub Category</Form.Label>
                        <Form.Control as="select" value="Select Category">
                            <option>Item 1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeHolder="Enter Product Price"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" placeHolder="Enter Product Quantity"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeHolder="Enter Image URL"></Form.Control>
                    </Form.Group>
                    <Button block>Add Product</Button>
                </Form>
            </Container>
        )
    }

};

export default AddProduct;
import React, { Component } from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


class ProductDetails extends Component {
    state = {
        product: null,
        reviews: null
    }

    renderReview = () => {
        if (this.state.reviews.length > 0) {
            return this.state.reviews.map(review =>
                <ReviewCard
                    rating={review.rating}
                    description={review.description}
                    name={review.customerId.name}
                />)
        }else{
            return <div>No reviews yet.</div>
        }

    }

    loadProduct() {
        axios.get("http://localhost:4000/api/product/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    product: response.data.SUCCESS,
                    reviews: response.data.SUCCESS.review
                })
            })
            .catch(error => console.log("Error: " + error))
    }

    onAddToCart() {
        if (this.props.isLoggedIn) {
            axios.put("http://localhost:4000/api/shoppingCart/add", {
                product_id: this.state.product._id,
                customer_id: localStorage.getItem("userId"),
            })
                .then(response => {
                    if (response.data.SUCCESS) {
                        this.props.history.push({
                            pathname: '/cart'
                        })
                    } else {
                        console.log("ERROR: error while adding to cart")
                    }
                })
                .catch(error => console.log(error))
        } else {
            console.log(this.props)
            this.props.history.push({
                pathname: '/login',
                myProps: {
                    logIn: this.props.logIn
                }
            })
        }
    }

    componentDidMount() {
        this.loadProduct()
    }

    renderProduct = () => {
        if (this.state.product) {
            return (<Container>
                <Row style={{ marginTop: "30px", height: "400px" }}>
                    <Col xs={6}>
                        <Card border="secondary" style={{ height: "400px" }}>
                            <Card.Img style={{ objectFit: "contain", width: "100%", height: "400px", padding: "20px" }} src={this.state.product.image} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: "400px"}}>
                            <Card.Body>
                                <Card.Title>
                                    {this.state.product.name}
                                </Card.Title>
                                <Card.Text>
                                    {/* 474 chars max */}
                                    {this.state.product.description}
                                </Card.Text>
                                <Card.Text>
                                    <li style={{ listStyle: "none" }}><strong>Product Price:</strong> ${this.state.product.price}</li>
                                    <li style={{ listStyle: "none" }}><strong>Product Rating:</strong> ******</li>
                                    <li style={{ listStyle: "none" }}><strong>Total Reviews:</strong> 100</li>
                                    {/* <li style={{ color: "red", listStyle: "none" }}>Out of Stock</li> */}
                                </Card.Text>
                                <Button style={{ position: "absolute", bottom: "20px" }} onClick={() => this.onAddToCart()}>Add To Cart</Button>
                                <Button style={{ position: "absolute", bottom: "20px", left: "150px" }}>Add To Wishlist</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col>
                        <h4>Product Reviews</h4>
                        {this.renderReview()}
                    </Col>
                </Row>
            </Container>)
        } else {
            return (<div>Loading...</div>)
        }
    }


    render() {
        return (
            this.renderProduct()
        )
    }
};

export default ProductDetails;
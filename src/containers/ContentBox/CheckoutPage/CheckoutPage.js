import React, { Component } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Axios from 'axios';

class Checkout extends Component {
    state = {
        shoppingCartId: "",
        products: [],
        totalPrice: 0,
        shippingAddress: localStorage.getItem("userAddress"),
        cardHolderName: "",
        cardNumber: "",
        expiryDate: "",
        CVV: "",
        customer_id: localStorage.getItem("userId")
    }

    onChangeListener(event){
        let oldState = {...this.state}
        oldState[event.target.id] = event.target.value
        this.setState(oldState)
    }

    loadProducts = () => {
        Axios.get("http://localhost:4000/api/shoppingCart/view/" + localStorage.getItem("userId"))
            .then(response => {
                const shoppingCartId = response.data.SUCCESS.shoppingCart._id
                const products = response.data.SUCCESS.shoppingCart.products
                let cartTotal = 0
                products.forEach(item => cartTotal += (item.quantity * item.productId.price))
                this.setState({
                    shoppingCartId: shoppingCartId,
                    products: products,
                    totalPrice: cartTotal
                })
            })
            .catch(error => console.log(error))
    }

    renderProducts() {
        if (this.state.products.length > 0) {
            return this.state.products.map(
                product =>
                    <ProductCard
                        img={product.productId.image[0]}
                        name={product.productId.name}
                        key={product._id}
                        id={product.productId._id}
                        totalQuantity={product.productId.quantity}
                        quantity={product.quantity}
                        price={product.productId.price}
                        removeProduct={this.removeProduct}
                        updateQuantity={this.updateQuantity}
                        checkout={true} />
            )
        } else {
            return <div>No Items Available In Cart</div>
        }
    }

    placeOrder = () => {
        Axios.post("http://localhost:4000/api/order/placeOrder", this.state)
        .then(response => {
            console.log(response.data)
            if(response.data.SUCCESS){
                this.props.history.push("/orders")
            }else{
                alert("Something went wrong")
            }
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.loadProducts()
    }

    render() {
        return (
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <h3>Checkout Page</h3>
                    {this.renderProducts()}
                    <h5 style={{ marginTop: "10px" }}>Cart Total: ${this.state.totalPrice}</h5>
                    <Card style={{ padding: "10px" }}>
                        <Card.Title>Shipping Address:</Card.Title>
                        <Card.Text>{localStorage.getItem("userAddress")}</Card.Text>
                    </Card>
                    <Card style={{ marginTop: "10px", padding: "10px" }}>
                        <Card.Title>Payment Details</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="cardHolderName">
                                    <Form.Control type="text" style={{width:"400px"}} placeholder="Enter Name On Card" onChange={(event) => this.onChangeListener(event)} />
                                </Form.Group>
                                <Form.Group controlId="cardNumber">
                                    <Form.Control type="text" style={{width:"400px"}} placeholder="Enter Card Number" onChange={(event) => this.onChangeListener(event)} />
                                </Form.Group>
                                <Form.Group>
                                    <div style={{display: "flex"}}>
                                        <div>
                                            <Form.Control id="expiryDate" type="date" style={{width:"200px"}} placeholder="Expiration Date" onChange={(event) => this.onChangeListener(event)} />
                                        </div>
                                        <div>
                                            <Form.Control id="CVV" type="text" style={{width:"190px", marginLeft: "10px"}} placeholder="Enter CVV" onChange={(event) => this.onChangeListener(event)} />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Button onClick={() => this.placeOrder()}>Place Order</Button>
                            </Form>
                        </Card.Text>
                    </Card>
                </div>
            </Container>
        )
    }
};

export default Checkout;
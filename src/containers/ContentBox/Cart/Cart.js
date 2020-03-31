import React, { Component } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Container, Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Axios from 'axios';

class Cart extends Component {
    state = {
        shoppingCartId: "",
        products: [],
        cartTotal: 0
    }

    updateQuantity = (product_id, event) => {
        const oldState = {...this.state}
        const index = oldState.products.findIndex(item => item.productId._id === product_id)
        oldState.products[index].quantity = parseInt(event.target.value)
        this.setState(oldState)
    }

    loadProducts = () => {
        Axios.get("http://localhost:4000/api/shoppingCart/view/" + localStorage.getItem("userId"))
            .then(response => {
                const shoppingCartId = response.data.SUCCESS.shoppingCart._id
                const products = response.data.SUCCESS.shoppingCart.products
                let cartTotal = 0
                products.forEach(item => cartTotal+=(item.quantity*item.productId.price))
                this.setState({
                shoppingCartId: shoppingCartId,
                products: products,
                cartTotal: cartTotal.toFixed(2)})
            })
            .catch(error => console.log(error))
    }

    removeProduct = (product_id) => {
        const payload = {
            customer_id: localStorage.getItem('userId'),
            productId: product_id
        }
        Axios.put("http://localhost:4000/api/shoppingCart/removeItem", payload)
            .then(response => {
                if (response.data.SUCCESS) {
                    const oldState = { ...this.state }
                    const index = oldState.products.findIndex(item => item.productId._id === product_id)
                    if (index != -1) oldState.products.splice(index, 1)
                    this.setState(oldState)
                }
            })
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
                        inCart={true} />
            )
        } else {
            return <div>No Items Available In Cart</div>
        }
    }

    renderCartButtons() {
        if (this.state.products.length != 0) {
            return (<div>
                <h5 style={{marginTop:"10px"}}>Cart Total: ${this.state.cartTotal}</h5>
                <LinkContainer to="/checkout" style={{ marginTop: "10px" }}><Button>Checkout</Button></LinkContainer>
                <Button style={{ marginTop: "10px", marginLeft: "10px" }}>Update Cart</Button>
            </div>)
        }
    }

    componentDidMount() {
        this.loadProducts()
    }

    render() {
        return (
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <h3>Cart Items</h3>
                    {this.renderProducts()}
                    {this.renderCartButtons()}
                </div>
            </Container>
        )
    }
};

export default Cart;
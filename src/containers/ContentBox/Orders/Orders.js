import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Axios from 'axios';
import { Card } from 'react-bootstrap';

class Orders extends Component {
    state = {
        orders: []
    }

    renderProducts = (products) => {
        return products.map(product =>
            <ProductCard
                id={product.productId._id}
                img={product.productId.image[0]}
                name={product.productId.name}
                key={product._id}
                quantity={product.quantity}
                price={product.productId.price}
                orders={true} />)
    }

    processDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString()
    }

    renderOrders = () => {
        if (this.state.orders.length > 0) {
            return this.state.orders.map(order =>
                <Card style={{ padding: "10px", marginTop: "10px" }} key={order._id}>
                    <Card.Title style={{marginLeft:"20px"}}>Order Date: {this.processDate(order.orderDate)}</Card.Title>
                    <Card.Body>
                        {this.renderProducts(order.product)}
                        <div style={{marginTop: "10px"}}>Order Status: {order.status}</div>
                        <div>TotalPrice: ${order.totalPrice}</div>
                    </Card.Body>
                </Card>
            )
        } else {
            return (<div>No Past Orders Available</div>)
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/api/order/getOrders/" + localStorage.getItem("userId"))
            .then(response => this.setState({ orders: response.data.SUCCESS.order }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <h3>Past Orders</h3>
                    {this.renderOrders()}
                </div>
            </Container>
        )
    }
};

export default Orders;
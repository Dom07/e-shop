import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Axios from 'axios';

class Orders extends Component {
    state={
        orders: [],
        products: []
    }

    componentDidMount(){
        Axios.get("http://localhost:4000/api/order/placeOrder")
            .then(response => console.log(response.data.SUCCESS))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <h3>Past Orders</h3>
                </div>
            </Container>
        )
    }
};

export default Orders;
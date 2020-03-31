import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

class WriteReview extends Component {
    state ={
        description: "",
        rating: "",
        product_id: this.props.match.params.product_id,
        customer_id: localStorage.getItem("userId")
    }

    onChangeListener(event){
        let oldState = {...this.state}
        oldState[event.target.id] = event.target.value
        this.setState(oldState)
    }

    onSubmitReview = () => {
        Axios.post("http://localhost:4000/api/review/add", this.state)
        .then(response => {
            if(response.data.SUCCESS){
                this.props.history.push("/orders")
            }
        })
    }

    render() {
        return (
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <h3>Write Review For {this.props.location.state.name}</h3>
                    <Form>
                        <Form.Control id="rating" style={{ width: "200px" }} max={5} min={1} type="number" placeholder="Rating out of 5" onChange={(event) => this.onChangeListener(event)}/>
                        <Form.Control id="description" style={{ width: "400px", marginTop: "10px" }} as="textarea" row={3} placeholder="What you think about the product ?" onChange={(event) => this.onChangeListener(event)}></Form.Control>
                        <Button style={{ marginTop: "10px" }} onClick={() => this.onSubmitReview()}>Submit</Button>
                    </Form>
                </div>
            </Container>
        )
    }
};

export default WriteReview;
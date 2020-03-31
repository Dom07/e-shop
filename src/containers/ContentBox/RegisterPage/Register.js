import React, { Component } from 'react';
import Axios from 'axios';

class Register extends Component {
    state = {
        name: '',
        address: '',
        phoneNumber: '',
        emailId: '',
        password: ''
    }

    onChangeListener(event){
        let oldState = {...this.state}
        oldState[event.target.id] = event.target.value
        this.setState(oldState)
    }

    onSubmit(){
        Axios.post('http://localhost:4000/api/customer/addCustomer', this.state)
        .then(response => {
            localStorage.setItem("userName", response.data.SUCCESS.name)
            localStorage.setItem("userId", response.data.SUCCESS._id)
            this.props.logIn()
            this.props.history.push("/")
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="login" style={{ marginTop: "50px" }}>
                <form className="loginForm">
                    <h3>Register</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input id="name" type="text" className="form-control" placeholder="Enter Name" onChange= {(event)=> this.onChangeListener(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input id="address" type="text" className="form-control" placeholder="Enter Address" onChange= {(event)=> this.onChangeListener(event)} />
                    </div>
                    <div className="form-group">
                        <label>Phone No</label>
                        <input id="phoneNumber" type="tel" className="form-control" placeholder="Enter Phone Number" onChange= {(event)=> this.onChangeListener(event)} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input id="emailId" type="email" className="form-control" placeholder="Enter email" onChange= {(event)=> this.onChangeListener(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Enter password" onChange= {(event)=> this.onChangeListener(event)} />
                    </div>
                    <button type="button" onClick={()=> this.onSubmit()} className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
};

export default Register; 
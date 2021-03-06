import React, {Component} from 'react';
import './Login.css'
import { LinkContainer } from 'react-router-bootstrap';
import Axios from 'axios';

class Login extends Component {
    state = {
        emailId: '',
        password: '',
        inCorrectDetails: false 
    }

    onChangeListener(event){
        let oldState = {...this.state}
        oldState[event.target.id] = event.target.value
        this.setState(oldState)
    }

    onSubmit(){
        Axios.post('http://localhost:4000/api/customer/getCustomer', this.state)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("userName", response.data.SUCCESS.name)
            localStorage.setItem("userId", response.data.SUCCESS._id)
            localStorage.setItem("userAddress", response.data.SUCCESS.address)
            this.props.location.myProps.logIn()
            if(this.props.location.myProps.from){
                this.props.history.push(this.props.location.myProps.from)
            }else{
                this.props.history.goBack()
            }
        })
        .catch(error => {
            this.setState({inCorrectDetails: true})
            console.log(error)
        })
    }

    render() {
        return (
            <div className="login">
                <form className="loginForm">
                    <h3>Sign In</h3>
                    {this.state.inCorrectDetails? <h6 style={{color:"red"}}>Incorrect username or password.<br></br>Please Try Again.</h6> : null}
                    <div className="form-group">
                        <label>Email address</label>
                        <input id="emailId" type="email" className="form-control" placeholder="Enter email" onChange={(event) => this.onChangeListener(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Enter password" onChange={(event) => this.onChangeListener(event)} />
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={()=> this.onSubmit()}>Submit</button>
                    <p className="text-left" style={{ marginTop: "5px" }}>
                        <LinkContainer to="/register"><a>Register</a></LinkContainer> for a new account?
                    </p>
                </form>
            </div>
        )
    }
};

export default Login;
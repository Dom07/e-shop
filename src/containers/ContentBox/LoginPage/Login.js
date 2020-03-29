import React from 'react';
import './Login.css'
import { LinkContainer } from 'react-router-bootstrap';

const Login = (props) => {
    return (
        <div className="login">
            <form className="loginForm">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="text-left" style={{ marginTop: "5px" }}>
                    <LinkContainer to="/register"><a href="#">Register</a></LinkContainer> for a new account?
                    </p>
            </form>
        </div>
    )
};

export default Login;
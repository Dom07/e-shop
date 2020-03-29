import React from 'react';

const Register = (props) => {
    return (
        <div className="login" style={{marginTop:"50px"}}>
            <form className="loginForm">
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" />
                </div>
                <div className="form-group">
                    <label>Phone No</label>
                    <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
};

export default Register; 
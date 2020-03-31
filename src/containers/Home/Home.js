import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContextBox from '../ContentBox/ContextBox';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    state = {
        isLoggedIn: false
    }

    logIn = () => {this.setState({isLoggedIn: true})}

    logOut = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('userId')
        this.setState({isLoggedIn: false})
    }

    componentDidMount(){
        if(localStorage.getItem('userName')){
            this.setState({isLoggedIn: true})
        }
    }

    render() {
        return (
            <div>
                <Navbar 
                    logIn = {this.logIn}
                    logOut = {this.logOut}
                    isLoggedIn = {this.state.isLoggedIn}
                />
                <ContextBox
                    isLoggedIn = {this.state.isLoggedIn}
                    logIn = {this.logIn}
                />
                {/* <Footer/> */}
            </div>
        )
    }
}

export default Home;
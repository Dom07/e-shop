import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContextBox from '../ContentBox/ContextBox';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContextBox/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
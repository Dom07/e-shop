import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContextBox from '../ContentBox/ContextBox';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContextBox/>
                <div>Footer</div>
            </div>
        )
    }
}

export default Home;
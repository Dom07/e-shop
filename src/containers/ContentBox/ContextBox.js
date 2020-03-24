import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ProductThumbNails from '../../components/ProductThumbNails/ProductThumbNails';

class ContextBox extends Component {
    state = {
        showProductList: true
    }

    onShowDetails = () => {
        this.setState({showProductList: false})
    }

    render() {
        let contents = null
        if (this.state.showProductList) {
            contents = (<div style={{marginTop:"20px"}}>
                <h3 style={{marginTop:"20px"}}>Trending In Electronics</h3>
                <hr style={{backgroundColor: "#007bff"}}></hr>
                <ProductThumbNails onShowDetails={this.onShowDetails}/>
                <h3 style={{marginTop:"20px"}}>Trending In Health Care</h3>
                <hr style={{backgroundColor: "#007bff"}}></hr>
                <ProductThumbNails onShowDetails={this.onShowDetails}/>
                <h3 style={{marginTop:"20px"}}>Trending In Clothes</h3>
                <hr style={{backgroundColor: "#007bff"}}></hr>
                <ProductThumbNails onShowDetails={this.onShowDetails}/>
                <h3 style={{marginTop:"20px"}}>Trending In Entertainment</h3>
                <hr style={{backgroundColor: "#007bff"}}></hr>
                <ProductThumbNails onShowDetails={this.onShowDetails}/>
            </div>)
        }
        return (<Container fluid>{contents}</Container>)
    }
}

export default ContextBox;

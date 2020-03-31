import React, { Component } from 'react';
import ProductThumbNails from '../../../../components/ProductThumbNails/ProductThumbNails';
import Axios from 'axios';

class FeaturedProduct extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        Axios.get('http://localhost:4000/api/product/getFeatured/'+this.props.name)
        .then(response => this.setState({products: response.data.SUCCESS}))
        .catch(error => console.log("ERROR: "+error))
    }

    render() {
        let products = null
        if (this.state.products) {
            if(this.state.products.length > 0){
                products = <ProductThumbNails products={this.state.products.slice(0, 5)} />        
            }else{
                products = <div>No Products found</div>
            }
        } else {
            products = <div>Loading....</div>
        }
        return (
            <div>
                <h3 style={{ marginTop: "20px" }}>Trending In {this.props.name}</h3>
                <hr style={{ backgroundColor: "#007bff" }}></hr>
                {products}
            </div>
        )
    }
};

export default FeaturedProduct;
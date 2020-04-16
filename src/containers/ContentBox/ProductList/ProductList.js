import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import ProductThumbNail from '../../../components/ProductThumbNails/ProductThumbNail/ProductThumbNail';

class ProductList extends Component {
    state = {
        products: [],
        subCategoryName: null
    }

    loadProducts = () => {
        Axios.get('http://localhost:4000/api/product/getProductBySubCategory/' + this.props.match.params.id)
            .then(response => this.setState({ products: response.data.SUCCESS, subCategoryName: this.props.match.params.name }))
            .catch(error => console.log(error))
    }

    renderProducts = () => {
        let contents = []
        if (this.state.products.length > 0) {
            const totalRows = parseInt(this.state.products.length / 5) + parseInt(this.state.products.length % 5)
            const productArray = this.state.products;
            for (let i = 0; i < totalRows; i++) {
                const row = <Row key={i}>
                    {this.renderColumns(productArray)}
                </Row>
                contents.push(row)
            }
            return contents;
        } else {
            return <div>No Products Available</div>
        }

    }

    renderColumns = (productArray) => {
        let contents = []
        for (let i = 0; i < 5; i++) {
            let item = productArray.shift()
            let cols = <Col key={i}/>
            if (item) {
                cols = <Col key={item._id}>
                    <ProductThumbNail
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        key={item._id}
                        image={item.image}
                        ratings={item.ratings}
                    />
                </Col>
            }
            contents.push(cols)
        }
        return contents;
    }

    componentDidMount() {
        this.loadProducts()
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.loadProducts()
        }
    }

    render() {
        return (
            <div>
                <h3 style={{ marginTop: "20px" }}>Available {this.props.match.params.name + "s"}</h3>
                <hr style={{ backgroundColor: "#007bff" }}></hr>
                {this.renderProducts()}
            </div>
        )
    }
};

export default ProductList;
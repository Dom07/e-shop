import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductThumbNail from './ProductThumbNail/ProductThumbNail';

const renderProducts = (products) =>{
    if(products){
        return products.map(product=> <Col key={product._id}>
            <ProductThumbNail 
                id={product._id}
                name={product.name} 
                price={product.price} 
                key={product._id}
                image={product.image[0]}/>
            </Col>)
    }
    else{
        return <div>Loading....</div>
    }
}

const ProductThumbNails = (props) => {
    return (
        <div>
            <Row>
               {renderProducts(props.products)}
            </Row>
        </div>
    )
};

export default ProductThumbNails;
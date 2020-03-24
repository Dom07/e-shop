import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductThumbNail from './ProductThumbNail/ProductThumbNail';

const ProductThumbNails = (props) => {
    return (
        <div>
            <Row>
                <Col><ProductThumbNail onShowDetails = {props.onShowDetails}/></Col>
                <Col><ProductThumbNail /></Col>
                <Col><ProductThumbNail /></Col>
                <Col><ProductThumbNail /></Col>
                <Col><ProductThumbNail /></Col>
            </Row>
        </div>
    )
};

export default ProductThumbNails;
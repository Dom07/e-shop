import React from 'react';
import { Form } from 'react-bootstrap';

const renderQuantity = (quantity) => {
    if (quantity >= 10) {
        const options = []
        for (let i = 0; i < 10; i++) {
            options.push(<option>{i + 1}</option>)
        }
        return options;
    }
}

const ProductCard = (props) => {
    return (
        <div style={{ display: "flex", height: "120px", border: "1px solid rgba(0,0,0,.125)", borderRadius: ".25rem", marginTop: "10px" }}>
            <div>
                <img src={props.img} style={{ height: "100px", width: "100px", objectFit: "contain", padding: "10px" }} />
            </div>
            <div style={{ marginLeft: "10px", padding: "15px", width: "100%" }}>
                <div>{props.name}</div>
                <span>Price: ${props.price}</span>
                <div style={{ display: "flex", marginTop: "5px" }}>
                    <span>Quantity: </span>
                    {(props.checkout) ? (<span> 1</span>): (<span style={{ marginLeft: "10px" }}>
                        <Form.Control size="sm" as="select" value={props.quantity} onChange={(event) => props.updateQuantity(props.id, event)}>
                            {renderQuantity(props.totalQuantity)}
                        </Form.Control>
                    </span>)}
                    {(props.checkout)? null : (<div style={{ marginLeft: "auto", color: "red", cursor: "pointer" }} onClick={() => props.removeProduct(props.id)}>Remove Item</div>)}
                </div>
            </div>
        </div>
    )
};

export default ProductCard;
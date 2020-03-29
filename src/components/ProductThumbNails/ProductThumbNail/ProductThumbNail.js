import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductThumbNail = (props) => {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.image} style={{height: "200px", objectFit: "contain", padding: "10px"}}/>
      <Card.Body>
        <Card.Title style={{ margin: "0px" }}>{props.name}</Card.Title>
        <Card.Text style={{ margin: "0px" }}>
          <span>Ratings: </span>
          <span>5</span>
        </Card.Text>
        <Card.Text style={{ margin: "0px" }}>
          <span>Price: </span>
          <span>${props.price}</span>
        </Card.Text>
        <Link to={"/product/"+props.id}>
          <p style={{ color: "#007bff", cursor: "pointer" }}>Show Details</p>
        </Link>
      </Card.Body>
    </Card>
  )
};

export default ProductThumbNail;
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const renderStars = (size) => {
  let stars = []
  for (let i = 0; i < size; i++) {
    stars.push(<i className="fas fa-star" key={i} style={{ color: "#fd7e14" }}></i>)
  }
  return stars
}

const ProductThumbNail = (props) => {
  return (
    <Card style={{ width: '15rem', marginBottom: "20px" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "200px", objectFit: "contain", padding: "10px" }} />
      <Card.Body>
        <Card.Title style={{ margin: "0px" }}>{props.name}</Card.Title>
        <Card.Text style={{ margin: "0px" }}>
          <span>Ratings: </span>
          <span>{renderStars(5)}</span>
        </Card.Text>
        <Card.Text style={{ margin: "0px" }}>
          <span>Price: </span>
          <span>${props.price}</span>
        </Card.Text>
        <Link to={"/product/" + props.id}>
          <p style={{ color: "#007bff", cursor: "pointer" }}>Show Details</p>
        </Link>
      </Card.Body>
    </Card>
  )
};

export default ProductThumbNail;
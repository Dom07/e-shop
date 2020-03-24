import React from 'react';
import {Card} from 'react-bootstrap';

const ProductThumbNail = (props) => {
    return(
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_OD_DSC_379x304_fdce56ef._SY304_CB421368544_.jpg/100px180" />
        <Card.Body>
          <Card.Title style={{margin: "0px"}}>Product Name</Card.Title>
          <Card.Text style={{margin: "0px"}}>
            <span>Ratings: </span>
            <span>5</span>
          </Card.Text>
          <Card.Text style={{margin: "0px"}}>
            <span>Price:</span>
            <span>100</span>
          </Card.Text>
          <p style={{color: "#007bff", cursor: "pointer"}} onClick={() => props.onShowDetails()}>Show Details</p>
        </Card.Body>
      </Card>
    )
};

export default ProductThumbNail;
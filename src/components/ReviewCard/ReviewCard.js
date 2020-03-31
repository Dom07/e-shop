import React from 'react';
import {Card} from 'react-bootstrap';

const renderStars = (rating) => {
    let content = []
    for(var i = 0; i< rating; i++){
        content.push(<i className="fas fa-star" style={{color: "#fd7e14"}}></i>)
    }
    return content
}

const ReviewCard = (props) => {
    return(
         <Card style={{padding: "10px", border: "1px solid #007bff", marginBottom: "10px"}}>
             <Card.Body>
                 <Card.Text>{renderStars(props.rating)}</Card.Text>
                 <Card.Text>{props.description}</Card.Text>
             </Card.Body>
             <Card.Footer><i className="fas fa-user" style={{marginRight: "5px"}}></i>{props.name}</Card.Footer>
         </Card>
    )
};

export default ReviewCard;
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ProductDetails = (props) => {
    return (
        <Container>
            <Row style={{ marginTop: "30px", height: "400px" }}>
                <Col xs={6}>
                    <Card style={{ height: "400px" }}>
                        <Card.Img style={{ objectFit: "contain", width: "100%", height: "400px", padding: "20px", border: "1px solid black" }} src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ height: "400px" }}>
                        <Card.Body>
                            <Card.Title>
                                Product Name
                            </Card.Title>
                            <Card.Text>
                                {/* 474 chars max */}
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Text>
                                <div><strong>Product Price:</strong> $100</div>
                                <div><strong>Product Rating:</strong> ******</div>
                                <div><strong>Total Reviews:</strong> 100</div>
                                <div style={{ color: "red" }}>Out of Stock</div>
                            </Card.Text>
                            <Button style={{ position: "absolute", bottom: "20px" }}>Add To Cart</Button>
                            <Button style={{ position: "absolute", bottom: "20px", left: "150px" }}>Add To Wishlist</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col>
                    <h4>Product Reviews</h4>
                    <Card>
                        <Card.Body>Hello</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Hello</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Hello</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProductDetails;
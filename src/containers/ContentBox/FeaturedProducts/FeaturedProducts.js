import React from 'react';
import ProductThumbNails from '../../../components/ProductThumbNails/ProductThumbNails';

const FeaturedProducts = (props) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h3 style={{ marginTop: "20px" }}>Trending In Electronics</h3>
            <hr style={{ backgroundColor: "#007bff" }}></hr>
            <ProductThumbNails />
            <h3 style={{ marginTop: "20px" }}>Trending In Health Care</h3>
            <hr style={{ backgroundColor: "#007bff" }}></hr>
            <ProductThumbNails />
            <h3 style={{ marginTop: "20px" }}>Trending In Clothes</h3>
            <hr style={{ backgroundColor: "#007bff" }}></hr>
            <ProductThumbNails />
            <h3 style={{ marginTop: "20px" }}>Trending In Entertainment</h3>
            <hr style={{ backgroundColor: "#007bff" }}></hr>
            <ProductThumbNails />
        </div>
    )
};

export default FeaturedProducts;
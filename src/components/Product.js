import React from 'react';

function Product(props) {
    return (
        <div className="products">
            <h2>Product Name: {props.name}</h2>
            <hr/>
            <h3>Price: {props.price}</h3>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Product;
import React from 'react';
import ToDoItem from '../components/ToDoItem';

import Product from '../components/Product';
import productData from '../components/productsData';

function MainContent() {

    const productComponents = productData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)

    return (
        <div className="Main">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <div>
                {productComponents}
            </div>
        </div>
    );
}

export default MainContent;
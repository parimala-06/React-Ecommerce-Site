import React from 'react';
import './Popular.css';
import allProducts from '../Assets/AllProducts.js';
import Item from '../Item/Item';

function Popular(){
    return(
        <div className='popular'>
            <h1>OUR PRODUCTS</h1> 
            <hr/>
            <div className='popular-items'>
                {allProducts.map((item,i)=>{
                    return <Item key = {i} id={item.id} name={item.title} image={item.image} oldprice={item.oldprice} newprice={item.newprice} />
                })}
            </div>
        </div>
    );
}
export default Popular;
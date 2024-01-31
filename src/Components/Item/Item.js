import React from 'react';
import './Item.css';


function Item(props){
    return(
        <div className='item'>
            <img src={props.image} alt='product-image'/>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                ₹{props.newprice}
                </div>
                <div className='item-price-old'>
                ₹{props.oldprice}
                </div>

            </div>
        </div>
    );
}
export default Item;
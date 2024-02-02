import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


function Item(props){
    return(
        <div className='item'>
        <Link to={`/product/${props.id}`}>
            <img src={props.image} alt='product-image'/>
        </Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-old'>
                    ₹{props.oldprice}
                </div>
                <div className='item-price-new'>
                    ₹{props.newprice}
                </div>
            </div>
        </div>
    );
}
export default Item;
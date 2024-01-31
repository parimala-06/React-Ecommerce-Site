import React from "react";
import './BreadCrumb.css';
import arrow from '../Assets/breadcrum_arrow.png';

function BreadCrumb(props){

    const {product} = props;
    return(
        <div className="breadcrumb">
            HOME <img src={arrow}/> SHOP <img src={arrow}/>{product.title}
        </div>
    )
}
export default BreadCrumb;
import React, {useContext} from "react";
import {ShopContext} from '../Context/ShopContext.js';
import {useParams} from 'react-router-dom';
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb.js";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.js';
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.js";



function Product(){

    const {allProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.find((e)=> e.id === Number(productId));

    return(
        <div>
            <BreadCrumb product = {product}/>
            <ProductDisplay product = {product}/>
            <DescriptionBox/>
        </div>
    )
}
export default Product;
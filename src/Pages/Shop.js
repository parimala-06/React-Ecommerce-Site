import React from "react";
import Glorify from "../Components/Glorify/Glorify.js";
import Popular from "../Components/Popular/Popular.js";
import Carousel from "../Components/Assets/Carousel/Carousel.js";
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.js'

function Shop(){
    return(
        <div>
            <Glorify/>
            <Carousel/>
            <Popular/>
            <DescriptionBox/>
        </div>
    );
}
export default Shop;
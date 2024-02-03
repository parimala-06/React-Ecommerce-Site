import React from "react";
import Glorify from "../Components/Glorify/Glorify";
import Popular from "../Components/Popular/Popular";
import Carousel from "../Components/Assets/Carousel/Carousel";
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'

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
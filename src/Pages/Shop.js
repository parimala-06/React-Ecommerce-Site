import React from "react";
import Glorify from "../Components/Glorify/Glorify";
import Popular from "../Components/Popular/Popular";
import Carousel from "../Components/Assets/Carousel/Carousel";

function Shop(){
    return(
        <div>
            <Glorify/>
            <Carousel/>
            <Popular/>
        </div>
    );
}
export default Shop;
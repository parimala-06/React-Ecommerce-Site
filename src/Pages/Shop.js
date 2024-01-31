import React from "react";
import Glorify from "../Components/Glorify/Glorify";
import Product from "./Product";
import Popular from "../Components/Popular/Popular";

function Shop(){
    return(
        <div>
            <Glorify/>
            <Popular/>
            <Product/>
        </div>
    );
}
export default Shop;
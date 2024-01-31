 import React, { createContext } from "react";
 import allProducts from "../Components/Assets/AllProducts";

 export const ShopContext = createContext(null);

 function ShopContextProvider(props){
    const contextValue ={allProducts};

    return(
        <ShopContextProvider value={contextValue}>
            {props.children}
        </ShopContextProvider>
    );
 }
 export default ShopContextProvider;
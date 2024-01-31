 import React, { createContext } from "react";
 import allProducts from '../Components/Assets/allProducts';

 export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
    
    const contextValue = {allProducts};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
 }
 export default ShopContextProvider;
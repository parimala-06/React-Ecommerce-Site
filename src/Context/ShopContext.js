 import React, { createContext, useState } from "react";
 import allProducts from '../Components/Assets/allProducts';

 export const ShopContext = createContext();

 function getDefault(){
    let cart = {};
    for (let index = 0; index < allProducts.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

 const ShopContextProvider = (props) => {

    const [cartItems, setCarItems] = useState(getDefault());

   function addToCart(itemId){
        setCarItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
   }

   function removefromCart(itemId){
    setCarItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
}
    
    const contextValue = {allProducts, cartItems, addToCart, removefromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
 }
 export default ShopContextProvider;
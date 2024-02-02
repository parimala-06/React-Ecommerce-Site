 import React, { createContext, useState } from "react";
 import allProducts from '../Components/Assets/allProducts';

 export const ShopContext = createContext();

 function getDefault(){
    let cart = {};
    for (let index = 1; index < allProducts.length +1; index++) {
        cart[index] = 0;
    }
    return cart;
}

 const ShopContextProvider = (props) => {

    const [cartItems, setCarItems] = useState(getDefault());
    console.log(cartItems);


   function addToCart(itemId){
        setCarItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
   }

   function removefromCart(itemId){
    setCarItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
}

    function getTotalCartAmount(){
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = allProducts.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.newprice * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contextValue = {allProducts, cartItems, addToCart, removefromCart, getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
 }
 export default ShopContextProvider;
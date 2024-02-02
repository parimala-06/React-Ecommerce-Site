import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove from '../Assets/cart_cross_icon.png';

function CartItems(){
    const {allProducts, cartItems, removefromCart} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Remove</p>
            </div>
            <hr/>
            {allProducts.map((e)=>{
                if (cartItems[e.id]>0)
                {
                    return(
                    <div>
                        <div className="cartitems-format-main cartitems-format">
                            <img src={e.image} alt="" className="carticon-product-icon"/>
                            <p>{e.title}</p>
                            <p>₹{e.newprice}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>₹{e.newprice* cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove} alt="" onClick={()=>{removefromCart(e.id)}}/>
                        </div>
                        <hr />
                    </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{0}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{0}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code. Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItems;
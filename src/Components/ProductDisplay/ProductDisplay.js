import React, { useContext } from "react";
import './ProductDisplay.css';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props){
 const {product} = props;
 const {addToCart} = useContext(ShopContext)

function addDays() {
    var result = new Date();
    result.setDate(result.getDate() + 3);
    return result.toDateString();
  }
const date = addDays();

return(
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="front"/>
                <img src={product.image} alt="front"/>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="main"/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>VitoBa Multi Cereal Health Mix</h1>
            <div className="productdisplay-right-star">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
                <p>(200)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="old-price">&#8377;{product.oldprice}</div>
                <div className="new-price">&#8377;{product.newprice}</div>
            </div>
            <div className="productdisplay-right-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="productdisplay-right-quant">
                    <h2>Select Quantity</h2>
                    <div className="productdisplay-right-quants">
                    <div>250g</div>
                    <div>500g</div>
                    <div>1kg</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-date">Get it by,<span> {date}</span></p>
        </div>
    </div>
);
}
export default ProductDisplay;
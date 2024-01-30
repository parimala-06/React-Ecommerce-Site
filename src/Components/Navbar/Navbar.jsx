import React from "react";
import './Navbar.css';
import trials from '../Assets/trials2.png';
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={trials} alt="Logo"/>
                <p>FOODS</p>
            </div>
            <div className="nav-login-cart">
                <button>Login</button>
                <FaShoppingCart size={30}/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );

}
export default Navbar;
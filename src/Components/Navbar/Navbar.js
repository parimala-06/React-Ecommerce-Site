import React from "react";
import './Navbar.css';
import trials from '../Assets/trials2.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-logo">
                <Link style={{textDecoration: 'none'}} to='/product'>
                    <img src={trials} alt="Logo"/>
                    <p>FOODS</p>
                </Link>
            </div>
            <div className="nav-login-cart">
                <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
                <Link style={{textDecoration: 'none'}} to='/cart'><FaShoppingCart size={30} color="black"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );

}
export default Navbar;
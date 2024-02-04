import React, { useContext, useRef } from "react";
import './Navbar.css';
import trials from '../Assets/trials2.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.js";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
    const {getTotalCartItem} = useContext(ShopContext);
    const buttonRef = useRef();

    function dropDownToggle(e){
        buttonRef.current.classList.toggle('nav-login-cart-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
            <Link to='/'>
                <img src={trials} alt="Logo"/>
            </Link>
            </div>
            <IoIosMenu className='nav-dropdown' onClick={dropDownToggle} size={30}/>
            <div ref={buttonRef} className="nav-login-cart">
                <Link style={{textDecoration: 'none'}} to='/goodness'><button>Goodness</button></Link>
                <Link style={{textDecoration: 'none'}} to='/display'><button>Products</button></Link>
                <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
                <Link style={{textDecoration: 'none'}} to='/cart'><FaShoppingCart size={30} color="black"/></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    );

}
export default Navbar;
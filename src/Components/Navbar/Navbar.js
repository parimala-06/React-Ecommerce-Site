import React, { useContext } from "react";
import './Navbar.css';
import trials from '../Assets/trials2.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
    const {getTotalCartItem} = useContext(ShopContext);
    return(
        <div className="navbar">
            <div className="nav-logo">
            <Link to='/'>
                <img src={trials} alt="Logo"/>
            </Link>
            </div>
            <div className="nav-login-cart">
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
import React from "react";
import './Footer.css';
import trials from '../Assets/trials2.png';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6";


function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className="footer">
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-icons">
                <div className="icon-container"><FaFacebookF size={22}/></div>         
                <div className="icon-container"><AiFillInstagram size={24}/></div>
                <div className="icon-container"><FaLinkedinIn size={22}/></div>
                <div className="icon-container"><FaTwitter size={18}/></div>
            </div>
            <div className="bottom-bar">
                <p>&copy;{year}vitobafoods . All rights reserved</p>
            </div>
        </div>
    );
}
export default Footer;
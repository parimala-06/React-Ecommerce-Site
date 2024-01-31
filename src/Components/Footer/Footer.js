import React from "react";
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


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
                <div className="icon-container"><FaFacebookSquare size={22}/></div>         
                <div className="icon-container"><FaInstagramSquare size={22}/></div>
                <div className="icon-container"><FaLinkedin size={22}/></div>
                <div className="icon-container"><FaTwitterSquare size={22}/></div>
            </div>
            <div className="bottom-bar">
                <p>&copy;{year}vitobafoods . All rights reserved</p>
            </div>
        </div>
    );
}
export default Footer;
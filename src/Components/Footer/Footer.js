import React from "react";
import './Footer.css';
import trials from '../Assets/trials2.png';


function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={trials} alt="logo"/>
                <p>FOODS</p>
            </div>
            <ul className="footer-contacts">
                <li>Email: vitobafoods@gmail.com</li>
                <li>Ph: +91 9344771313</li>
                <li>Address: 26, Masani Amman Nagar, Velakinar, Coimbatore-641029</li>
            </ul>

        </div>
    );
}
export default Footer;
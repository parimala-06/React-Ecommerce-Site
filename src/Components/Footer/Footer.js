import React from "react";
import './Footer.css';
import trials from '../Assets/trials2.png';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
         <div className="container">
            <div className="footer-content1">
                <h3>Contact Us</h3>
                    <p>Email: vitobafoods@gmail.com</p>
                    <p>Ph: +91 9344771313</p>
                    <p>Address: <br/>26, Masani Amman Nagar, <br/>Velakinar, <br/>Coimbatore-641029</p>
            </div>
            <div className="footer-content2">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.034725070551!2d76.9509163964107!3d11.081831916096514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f70029c55519%3A0x3ea431bce5f52d7!2sVitoba%20Foods!5e0!3m2!1sen!2sin!4v1706675224370!5m2!1sen!2sin" 
                width="520" 
                height="200" 
                style={{border:'none'}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="footer-content3">
            <h3>Follow Us</h3>
                <p><a><FaFacebookF size={22}/></a></p>
                <p><a><AiFillInstagram size={22}/></a></p>
                <p><a><BsTwitterX size={22}/></a></p>
                <p><a><FaLinkedinIn size={22}/></a></p>
            </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; {year} your company . All rights reserved</p>
            </div>
        </footer>
    );
}
export default Footer;
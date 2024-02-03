import React from "react";
import './Glorify.css';
import { FcApproval } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Slogan from '../Assets/Slogan1.svg';

function Glorify(){
    return(
        <div className="glorify">
            <div className="glorify-left">
                <h2>A Symphony of Love and Nutrients</h2>
                <div>
                    <div className="icon-1">
                        <p> Vitoba's Health Mix <FcApproval size={35}/></p>
                    </div>
                    <br/>
                    <div className="icon-2">
                    <h2>Feel the Warmth of Mom's Kitchen 💖</h2>
                         {/* <FcLike size={50}/>  */}
                    </div>
                    <h2>in Every Multigrain Bite</h2>
                </div>
            </div>
            <div className="glorify-right">
                <img className="glorify-img" src={Slogan} alt="slogan"/>
            </div>
        </div>
    );
}
export default Glorify;
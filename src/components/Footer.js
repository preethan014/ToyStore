import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const footer = () => {

  
  return (
    <div className="footer-outer">
      <div className="footer-upper-part-outer">
        <div className="upper-left">Kiddie Corner</div>
        <div className="footer-opt options footer-options">
        <div className=" option options-catalog">  <NavLink>home</NavLink> </div>
          <div className=" option options-catalog">  <NavLink>catlog</NavLink> </div>
          <div className="option options-catalog"> <NavLink>delivery</NavLink></div>
          <div className="option options-catalog">   <NavLink>about</NavLink></div>
          <div className="option options-catalog"><NavLink>contacts</NavLink></div>

        </div>
        <div
          style={{
            display: "flex",
            marginRight: "25px",
            width:"20%",
            justifyContent:"center",
            color:"white"
          }}
        >
          <div className="fna navbarheadicons">
            <FaTwitter />
          </div>
          <div className="navbarheadicons">
            <FaFacebook />
          </div>
          <div className="navbarheadicons">
            <FaInstagram />
          </div>
          <div className="navbarheadicons">
            <FaPinterest />
          </div>
          <div className="navbarheadicons">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="footer-seperater"></div>
      <div className="footer-lower-part">
        <div className="lower-left">
          Created with love by <span className="lower-underliner"> Elastic Themes</span>
        </div>
        <div className="lower-right">
          Powered by <span className="lower-underliner"> Webflow</span>
          <span><GoDotFill size={10}/></span>
          <span className="lower-underliner">Style Guides</span>
          <span><GoDotFill size={10} /></span>
          <span className="lower-underliner">Licensing</span>
        </div>
      </div>
    </div>
  );
};

export default footer;

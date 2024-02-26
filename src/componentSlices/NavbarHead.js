import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const NavbarHead = () => {
  return (
    <div
    style={{
      display: "flex",
 
      backgroundColor: "#A5C926",
      margin: "0px",
      padding: "0px",
      justifyContent: "center",
    }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#A5C926",
          color: "white",
          height: "30px",
          width: "80%",
          justifyContent: "space-between",
          fontSize: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "10px",
            marginRight: "10px",
            gap:"15px"
          }}
        >
          <span>Call Us: +1 213 974-5895</span>
          <span>
            Email:
            <span
              style={{
                textDecoration: "underline",
                cursor:"pointer"
              }}
            >
              kiddicorner@demo.com
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginRight: "25px",
          }}
        >
          <div className="navbarheadicons">
           
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
    </div>
  );
};

export default NavbarHead;

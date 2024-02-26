import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const NavbarMain = () => {
  const navigate=useNavigate();
  return (
    <div className="main-header-outer-side">
      <div className="main-header-inner-side">
        <div className="logo-name" onClick={()=>{
          navigate("/")
        }}>
          KiddieCorner
        </div>  
        <div className="options">
         
          <div className="option options-catalog"><NavLink to="catalog">catalog</NavLink></div>
          <div className="option options-catalog"><NavLink to="delivery">delivery</NavLink></div>
          <div className="option options-catalog"><NavLink to="about">about</NavLink></div>
          <div className="option options-catalog"><NavLink to="contacts">contacts</NavLink></div>
        </div>
        <div className="cart" style={{
          display:"flex",
        }}>
          
          <p>
          cart
            <span>
              <BsCart3 className="cart-icon"/>
            </span>
            <p style={{
              display:"inline-flex",
              height:"22px",
              width:"22px",
              backgroundColor:"#A5C926",
              borderRadius:"50px",
              alignItems:"center",
              justifyContent:"center",
              color:"white"
            }}>0</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;

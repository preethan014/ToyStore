import React from "react";
import { RiTelegramFill } from "react-icons/ri";
const Enqury = () => {
  
  return (
    <div className="main-outer-subscribe">
      <div className="subscribe-outer">
       
          <div className="Telegram-icon">
            <RiTelegramFill color="rgb(163, 200, 30)" size={75} />
          </div>

          <div className="subscribe-text-outer">
            <div className="subscribe-text-inner">
            Subscribe to our newsletter & get <span>10% discount!</span>
            </div>
            
          </div>
          <form className="subscribe-form">
            <input className="subscribe-text-input" type="email" placeholder="enter your email address" required/>
            <button className="subscribe-text-btn" type="submit">Subscribe</button>
          </form>
        </div>
     
    </div>
  );
};

export default Enqury;

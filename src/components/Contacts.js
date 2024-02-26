import React from 'react'
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const Contacts = () => {
  return (
    <div className='contacts-outer'>
      <div className='contacts-inner'>
        <div className='contacts-maps'>

        </div>
        <div className='contacts-second-part'><div className='contacts-form-outer'> <form
        className='form-main'>
          <p>Full Name</p>
          <input type='text' placeholder='Enter your name' required/>
          <p>Email Address</p>
          <input type='email' placeholder='Enter your email' required/>
          <p>Description</p>
          <textarea placeholder='Enter your message' required/>
          <button type='submit'>Send Message</button>
        </form></div>
        <div className='contacts-external'>
          <div className='contacts-address'>
        <h3>Contact Info</h3>
        <p className='p1'>4293  Hyderabad,Hitech City, CA 90012</p>
        <p>+91 9999444555</p>
        <p>kiddicorner@demo.com</p>
       </div>
       <div className='contacts-social-media-links-outer'>
        <h2>Follow Us</h2>
        <div className='contact-navbarheadicons'>
        <div className="c0 i-navbarheadicons">
           
           <FaTwitter size={20} color='white'/>
         </div>
         <div className="c1 i-navbarheadicons">
      
           <FaFacebook size={20} color='white'/>
         </div>
         <div className="c2 i-navbarheadicons">
           <FaInstagram size={20} color='white'/>
         </div>
         <div className="c3 i-navbarheadicons">
           <FaPinterest size={20} color='white'/>
         </div>
         <div className="c4 i-navbarheadicons">
           <FaYoutube size={20} color='white'/>
         </div>
        </div>
       </div></div></div>
        
       
      </div>
    </div>
  )
}

export default Contacts

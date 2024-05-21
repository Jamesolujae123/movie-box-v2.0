import React from 'react'
import "./footer.css"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
<div className='footer-cont'>
<div className='footer-icons'>
    <span  className='icon'> <IoLogoFacebook/></span>
   <span className='icon'><FaTwitter  /></span>
   <span className='icon' ><FaInstagram /></span>
   <span className='icon'><FaYoutube  /></span>
    
    
    
</div>
<div className='footer-a'>
    <a href='#'>Conditions of Use</a>
    <a href='#'>Privacy & Policy</a>
    <a href='#'>Press Room</a>
</div>

<div className='footer-info'>© 2021 MovieBox by Adriana Eka Prayudha  </div>

</div>

    </div>
  )
}

export default Footer
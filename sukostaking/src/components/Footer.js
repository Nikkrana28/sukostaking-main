import React from 'react'
import logo from '../images/Retsukologo.png'
import {FaFacebookF, FaRedditAlien, FaDiscord, FaInstagram, FaTwitter, FaTelegramPlane} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer text-center'>
      <img src={logo} alt="" style={{maxHeight:"150px", zIndex:"5", position: "absolute"}} />
      <p className="fs-4" style={{paddingTop: "150px"}}>BUY $Retsuko</p>
      <div className="mt-3">
        <button className="btn btn-outline-dark me-2">RetsukoSwap</button>
        <button className="btn btn-outline-dark">UniSwap</button>
      </div>
      <div className="footerSocial my-3">
        
        <a href="https://www.instagram.com/retsukoerc/" className="fSocial" target="_blank" rel="noreferrer"><FaInstagram/></a>
       
        <a href="https://twitter.com/RetsukoOfficial" className="fSocial" target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://t.me/RetsukoOfficial" className="fSocial" target="_blank" rel="noreferrer"><FaTelegramPlane/></a>
      </div>
      <div className="py-3">
     
      <p>Copyright &copy;2022 Retsuko.io. All rights reserved. </p>
      </div>
    </div>
  )
}

import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="copyright"> &#169; FireWatch 2024</span>
      <div className="social">
        <img className="privacity" src="../../../assets/images/privacidad(1).png" alt="privacidad"/>
        <span>Privacidad</span>
        <span>Sobre nosotros</span>
        <img className="facebook" src="../../../assets/images/facebook.png" alt="facebook"/>
        <img className="instagram" src="../../../assets/images/instagram.png" alt="instagram"/>
        <img className="linkedin" src="../../../assets/images/linkedin.png" alt="linkedin"/>
        <img className="twitter" src="../../../assets/images/icons8-twitterx-64.png" alt="twitter"/>
      </div>
    </div>
  )
}

export default Footer

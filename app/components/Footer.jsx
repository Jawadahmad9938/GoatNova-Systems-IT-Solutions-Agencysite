import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="logo">GoatNova Systems</div>
        <div className="review">
          REVIEWED ON <strong>Clutch</strong> <span className="stars">★★★★★</span> 6 REVIEWS
        </div>
        <div className="columns">
          <div className="column">
           <h3>HEADQUARTER</h3>
            <p>Pakistan, Multan</p>
            <p>Get Us</p>
            <p>+92301 1414134</p>
            <p>jawadahmad9938@gmail.com</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-xing"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="column">
            <h3>PRODUCTS</h3>
            <a href="#">Purchase Approval App</a>
            <a href="#">Retailer App</a>
            <a href="#">Board Meeting App</a>
            <h3>BLOG</h3>
            <a href="#">Custom-CMS</a>
          </div>
          <div className="column">
            <h3>SERVICES</h3>
            <a href="#">Mobile App Development</a>
            <a href="#">Web Development</a>
            <a href="#">Artificial Intelligence(AI)</a>
            <a href="#">Machine Learning</a>
            <a href="#">Data Analytics</a>
            <a href="#">IT Security</a>
            <a href="#">Generative AI</a>
            <a href="#">Internet of Things(IoT)</a>
          </div>
          <div className="column">
            <h3>COMPANY</h3>
            <a href="#">About Us</a>
            <a href="#">Careers <span className="badge">We're hiring</span></a>
            <a href="#">Technology & Skill Set</a>
            <a href="#">Ventures and Partnerships</a>
            <a href="#">Terms of Service</a>
            <a href="#">RPA Website Case Study</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2019 GoatNova Systems IT Solutions All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="logo">CodeGlo</div>
        <div className="review">
          REVIEWED ON <strong>Clutch</strong> <span className="stars">★★★★★</span> 6 REVIEWS
        </div>
        <div className="columns">
          <div className="column">
            <h3>GLOBAL HEADQUARTERS</h3>
            <p>342 N Water St</p>
            <p>Suite 600</p>
            <p>Milwaukee, WI 53203</p>
            <p>USA</p>
            <p>+1920-221-0777</p>
            <p>info@codeglo.com</p>
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
            <a href="#">Cloud Infrastructure</a>
            <a href="#">IT Security</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Remote Technology Staffing</a>
            <a href="#">ADA Compliance</a>
            <a href="#">Blockchain Technology</a>
            <a href="#">Quality Assurance</a>
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
          Copyright © 2019 CodeGlo Technologies. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
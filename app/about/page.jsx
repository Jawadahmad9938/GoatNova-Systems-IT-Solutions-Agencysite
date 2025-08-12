import React from 'react'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import Together from '../components/Together'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />

      <div className='Mobile-main'>
        <div className="container-services">
          <div className="title-services">About GoatNova Systems</div>
          <div className="subtitle-services">
            We are a forward-thinking technology company dedicated to delivering
            innovative digital solutions for businesses worldwide.
            <br />
            Our mission is to empower brands with cutting-edge technology,
            scalable strategies, and exceptional user experiences.
          </div>
          <div className="featured-services">
            <p>Trusted by global innovators</p>
            <div className="logos-services">
              <img alt="Fox News Logo" height="50" src="fox_news_channel_logo.svg" width="100" />
              <img alt="NBC Logo" height="50" src="nbc_logo.svg" width="100" />
              <img alt="Product Hunt Logo" height="50" src="product-hunt-logo-vertical-black.svg" width="100" />
              <img alt="Medium Logo" height="50" src="medium-seeklogo.com.svg" width="100" />
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Together />
      <Footer />
    </>
  )
}

export default About

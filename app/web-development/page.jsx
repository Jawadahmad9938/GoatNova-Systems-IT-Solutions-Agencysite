import React from 'react';
import Navbar from '../components/Navbar';
import Testimonial from '../components/Testimonial';
import Together from '../components/Together';
import Footer from '../components/Footer';

const Web_development = () => {
  return (
    <>
      <Navbar />
      <div className='Mobile-main'>
        <div className="container-services">
          <div className="title-services">Web Apps And Websites That <br /> Make Your Brand Stand Out </div>
          {<div className="subtitle-services">
            Make Your Brand Stand Out
            <br />
            Check out our services below to find out how we can help you build an
            <br />
            end-to-end plan of action for your brand
          </div> }
          <div className="featured-services">
            <p>Our work has been featured in</p>
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
  );
};

export default Web_development;
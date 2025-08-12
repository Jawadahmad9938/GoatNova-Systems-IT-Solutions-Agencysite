import React from 'react'
import Navbar from '../components/Navbar'
import Mobile1 from '../components/Mobile-1'
import Mobile2 from '../components/Mobile-2'
import Mobile_3 from '../components/Mobile-3'
import Mobile_4 from '../components/Mobile-4'
import Together from '../components/Together'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Mobile = () => {

  return (
    <>
    
    <Navbar />


      <div className='Mobile-main'>
        <div className="container-services">
          <div className="title-services">Scalable Mobile Apps Designed</div>
          <div className="subtitle-services">
            Specifically For You
            <br />
            Check out our services below to find out how we can help you build an
            <br />
            end-to-end plan of action for your brand
          </div>
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

      <Mobile1/ >

      <Mobile2 />

      <Mobile_3 />

      {/* <Mobile_4 /> */}

      <Testimonial />

      <Together />

      <Footer />


    </>
  )
}

export default Mobile
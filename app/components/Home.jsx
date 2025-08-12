'use client';
import React, { useEffect } from 'react';
import { FaAndroid, FaApple, FaShopify, FaAngular, FaNodeJs, FaPython, FaAws, FaGoogle, FaStripe, FaMailchimp, FaBitcoin, FaEthereum, FaMicrosoft, FaCloudflare, FaInfoCircle, FaCloudDownloadAlt } from 'react-icons/fa';
import { FaChartLine, FaAd, FaUniversalAccess, FaWaveSquare, FaCheckCircle, FaShieldAlt, FaLock, FaUsers, FaCode, FaCoins } from 'react-icons/fa';
import { FaPlay, FaTasks, FaLightbulb, FaDatabase, FaComments, FaThumbsUp } from 'react-icons/fa';
import { BsBrowserChrome } from "react-icons/bs"
import { IoLogoAndroid } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './Footer';
import Testimonial from './Testimonial';
import Development from './Development';
import Navbar from '../components/Navbar';



function Home() {

  useEffect(() =>{
    AOS.init();
  },[])

  return (
    <>

<Navbar />

    <div className="home" id='video-container'>
  <video autoPlay muted loop className="background-video-home">
    <source src="background-1.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
      {/* <div className="container-home">
        <div className="text-section-home">
          <h1 className='glow'>Build The Best.</h1>
          <p className='glow'>
            At CodeGlo, we are passionate about building the next generation of applications,
            infrastructures, and technical teams so you can speed up and scale up.
          </p>
          <div className="button-home">
            GET TO KNOW US
            <i className="fas fa-arrow-right"></i>
          </div>
          <div className="awards-home">
            <img
              src="ban_log1.webp"
              alt="Award 1"
              width="100"
              height="100"
            />
            <img
              src="ban_log2.webp"
              alt="Award 2"
              width="100"
              height="100"
            />
          </div>
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
      </div> */}
    </div>



{/* ====================

 Home Section 1

==================== */}

<div className="home-section-1">
  <div className="container-home-section-1">
   <h1 className="h1-home-section-1" data-aos = "fade-right">
    Who we have worked with
   </h1>
   <div className="grid-home-section-1">
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="AER CELL Logo" height="100" src="1.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="BIG GREEN DAO Logo" height="100" src="11_1.svg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="MARAH NATURAL Logo" height="100" src="3.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="VMWARE Logo" height="100" src="4.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="DELL Logo" height="100" src="5.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="HITACHI Logo" height="100" src="6.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="AUTOMATION ANYWHERE Logo" height="100" src="7.png" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="NATERA Logo" height="100" src="8.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="VAHDAM INDIA Logo" height="100" src="9.jpg" width="200"/>
    </div>
    <div className="grid-item-home-section-1" data-aos = "zoom-in">
     <img alt="USHUR Logo" height="100" src="10.jpg" width="200"/>
    </div>
   </div>
   <div className="view-more-home-section-1" data-aos = "fade-right">
    <a href="#">
     View More
    </a>
   </div>
  </div>
 </div>


 {/* ==============================

Home Sectin 2 CSS

=============================  */}
<div className='home-section-2'>
  <div className="container-home-section-2">
    <h1 data-aos = "zoom-in">What We Do?</h1>
    <Development />
  </div>
</div>



<div className='home-section-3'>
    <div className="container-home-section-3">
        <h1 data-aos = "fade-right">Product</h1>
        <p data-aos = "zoom-in">We have the experience and expertise in building enterprise grade mobile applications and provide end to end IT solutions to industry specific demands.</p>
        <div className="product-section-home-section-3">
            <div className="product-home-section-3" data-aos = "fade-right">
                <img alt="Various devices showing purchase approval application" src="purchase-approval.png"/>
                <div className="product-title-home-section-3">Purchase approval</div>
            </div>
            <div className="product-home-section-3" data-aos = "fade-right">
                <img alt="Various devices showing board meeting application" src="board-meeting.png"/>
                <div className="product-title-home-section-3">Board meeting</div>
            </div>
        </div>
    </div>
</div>

{/* =======================

Home Section 4

=========================== */}

<Counter />


{/* ==========================

Home Section 5

========================== */}

<div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
  <h1 data-aos = "fade-right" className="text-5xl font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
    Our Culture
  </h1>
  <p data-aos = "zoom-in" className="text-gray-600 text-lg mb-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
    This is how we go about achieving excellence in what we do
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12" style={{ fontFamily: '"Poppins", sans-serif' }}>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
    <FaPlay style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Keep it simple</p>
    </div>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
      <FaLightbulb style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Focusing on productivity</p>
    </div>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
      <FaComments style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Straight forward communication</p>
    </div>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
      <FaTasks style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Constant improvement evaluation</p>
    </div>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
      <FaDatabase style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Data driven decision making</p>
    </div>
    <div data-aos = "fade-right" className="flex flex-col items-center w-full md:w-64">
      <FaThumbsUp style={{ color: '#00e0ff' }} className="mb-4" size={48} />
      <p data-aos = "zoom-in" className="font-semibold text-lg">Positive attitude</p>
    </div>
  </div>
  <button data-aos = "zoom-in" className="px-6 py-3 border border-teal-500 rounded-full flex items-center text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300" style={{ color: '#00e0ff', fontFamily: '"Poppins", sans-serif' }}>
    <FaInfoCircle className="mr-2" />
    More about us
  </button>
</div>



<div className='stack'>
    <div className="container-stack">
        <h1 data-aos = "fade-right">Our Technology Stack</h1>
        <p data-aos = "fade-right">We use modern, proven technologies and approaches that allow us to effectively extend and scale our products.</p>
        <div className="tech-icons-stack">
            <div data-aos = "fade-right" className="tech-item-stack">
                <i data-aos = "fade-right" className="fas fa-browser"><BsBrowserChrome /></i>
                <p>Web</p>
            </div>
            <div data-aos = "fade-right" className="tech-item-stack">
                <i className="fab fa-apple"><FaApple /></i>
                <p>iOS</p>
            </div>
            <div data-aos = "fade-right" className="tech-item-stack">
                <i className="fab fa-android"><IoLogoAndroid /></i>
                <p>Android</p>
            </div>
            <div data-aos = "fade-right" className="tech-item-stack">
                <i className="fas fa-watch"><BsSmartwatch /></i>
                <p>Wearables</p>
            </div>
            <div data-aos = "fade-right" className="tech-item-stack">
                <i className="fas fa-cloud"><FaCloudDownloadAlt /></i>
                <p>CloudOps</p>
            </div>
            <div data-aos = "fade-right" className="tech-item-stack">
                <i className="fas fa-shield-alt"><FaShieldAlt /></i>
                <p>IT Security</p>
            </div>
        </div>
        <div className="button-container-stack">
            <a href="#"><i className="fas fa-shield-alt"></i> See our Tech Stack</a>
        </div>
    </div>
</div>

<Testimonial />

<Footer />




{/* Are you looking for a modern, fast, and responsive website for your business or personal brand? You're in the right place!

I specialize in building professional websites using React.js and Next.js with clean UI, mobile responsiveness, SEO optimization, and smooth animations.

Whether you need a single landing page, a multi-page business site, or a fully functional web app, Ive got you covered!



What you will get:

Fully responsive React or Next.js website
Clean and modern UI (Tailwind CSS or Bootstrap)
SEO-friendly and fast-loading pages
Contact form with validation
Smooth animations and transitions
Deployment to Vercel, Netlify, or your own hosting
Integration with APIs (contact form, newsletter, etc.)




Why Choose Me?

100% custom-coded (no templates)

Pixel-perfect design conversion (Figma, XD, PSD)

Developer-friendly and clean code

Fast delivery & regular updates

Friendly communication & post-delivery support



Tech Stack I Use:

React.js / Next.js
Tailwind CSS / Bootstrap
JavaScript / TypeScript
Vercel / Netlify / GitHub
API integration */}




</>
  );
}

export default Home;

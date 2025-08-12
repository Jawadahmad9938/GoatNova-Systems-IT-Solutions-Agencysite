'use client';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs'
import { FaAndroid, FaApple, FaShopify, FaNodeJs, FaPython, FaAws, FaGoogle, FaStripe, FaMailchimp, FaBitcoin, FaEthereum, FaCloudflare, FaWordpress, FaAccessibleIcon, FaDigitalOcean, FaSlack, FaMonero, FaYelp } from 'react-icons/fa';
import { FaChartLine, FaAd, } from 'react-icons/fa';
import { TbBrandAzure } from "react-icons/tb";
import { SiBitdefender, SiKaspersky } from "react-icons/si";
import { MdOutlineZoomIn } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { GiEggClutch } from "react-icons/gi";
import Work from '../components/Work';
import Stack from '../components/Stack';
import Footer from '../components/Footer';
import Together from '../components/Together';
import Navbar from '../components/Navbar';

function Services() {
  return (
    
    
    <>


<Navbar />


      <div className='services'>
        <div className="container-services">
          <div className="title-services">Our Services</div>
          <div className="subtitle-services">
            One stop solution to all your tech requirements
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

      <div className="container-services-1">
            <div className="service-services-2">
                <h2>Mobile App Development</h2>
                <p>We bring innovative design and high-end mobile app solutions that guarantee quality products built to meet the market's demands. Clean, minimalistic, bold, or complex - we'll get the job done!</p>
                <div className="icons">
                    <FaAndroid />
                    <FaApple />
                </div>
            </div>
            <div className="service-services-1">
                <h2>Web Development</h2>
                <p>With an interest in highly skilled developers and designers, you can rest assured of nothing less than a powerful and engaging website compatible across all platforms.</p>
                <div className="icons">
                    <FaShopify />
                    <FaNodeJs />
                    <FaPython />
                </div>
            </div>
            <div className="service-services-2">
                <h2>Digital Marketing</h2>
                <p>We can help you navigate through some of the performance management tools and lead strategies to build your customized solution with significant results for your businesses.</p>
                <div className="icons">
                <FaGoogle />
                <FaChartLine />
                <FaStripe />
                <FaMailchimp />
                <FaAd />
                </div>
            </div>
            <div className="service-services-1">
                <h2>Website ADA Compliance</h2>
                <p>Our ADA compliance services offer a thorough inspection, reporting, evaluation, and continuous maintenance of your website to ensure your website is accessible by the visually impaired and disabled.</p>
                <div className="icons">
                    <FaWordpress />
                    <FaAccessibleIcon />
                </div>
            </div>
            <div className="service-services-2">
                <h2>Cloud Infrastructure</h2>
                <p>Our Cloud Infrastructure services help you save money, time, and resources and ensure you maintain and secure your data in a more efficient way with our services.</p>
                <div className="icons">
                    <FaAws />
                    <FaDigitalOcean />
                    <TbBrandAzure />
                </div>
            </div>
            <div className="service-services-1">
                <h2>IT Security</h2>
                <p>As an expert in internet protection, our team offers reliable and affordably priced security solutions, ensuring you are always safe with the most up-to-date solutions that include digital transformation, cloud security, and more.</p>
                <div className="icons">
                    <FaCloudflare />
                    <SiKaspersky />
                    <SiBitdefender />
                </div>
            </div>
            <div className="service-services-2">
                <h2>Remote Technology Staffing</h2>
                <p>Save your productivity. Build a remote team. Integrate your team today!</p>
                <div className="icons">
                    <FaSlack />
                    <MdOutlineZoomIn />
                </div>
            </div>
            <div className="service-services-1">
                <h2>Blockchain Technology</h2>
                <p>Our blockchain services are designed to help you build the technology that works. We ensure secure, efficient, and reliable P2P, smart contracts, and other services, and we build the technology that facilitates business transactions seamlessly.</p>
                <div className="icons">
                    <FaBitcoin />
                    <FaEthereum />
                    <FaMonero />
                </div>
            </div>
            <div className="service-services-2">
                <h2>Online Reputation Management</h2>
                <p>Our ORM services can help you boost your brand's digital presence and ensure SEO and Digital Marketing processes to build a loyal user base for your brand while minimizing any adverse impact on your reputation.</p>
                <div className="icons">
                    <SiTrustpilot />
                    <GiEggClutch />
                    <FaYelp />
                </div>
            </div>
        </div>

         <Work />
         <Stack />
         <Together />
         <Footer />
    </>
  );
}

export default Services;

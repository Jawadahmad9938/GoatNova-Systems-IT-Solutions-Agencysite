import Aos from 'aos';
import React, { useEffect } from 'react'
import { BsBrowserChrome, BsSmartwatch } from 'react-icons/bs';
import {FaApple, FaCloudDownloadAlt } from 'react-icons/fa';
import {FaShieldAlt} from 'react-icons/fa';
import { IoLogoAndroid } from 'react-icons/io';

function Stack() {
    useEffect(() =>{
        Aos.init();
      },[])
  return (
    <>
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
    </>
  )
}

export default Stack
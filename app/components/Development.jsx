import React from 'react'
import { FaAndroid, FaApple, FaShopify, FaAngular, FaNodeJs, FaPython, FaAws, FaGoogle, FaStripe, FaMailchimp, FaBitcoin, FaEthereum, FaMicrosoft, FaCloudflare, FaInfoCircle, FaCloudDownloadAlt } from 'react-icons/fa';
import { FaChartLine, FaAd, FaUniversalAccess, FaWaveSquare, FaCheckCircle, FaShieldAlt, FaLock, FaUsers, FaCode, FaCoins } from 'react-icons/fa';
import { FaPlay, FaTasks, FaLightbulb, FaDatabase, FaComments, FaThumbsUp } from 'react-icons/fa';

function Development() {
  return (
    <>
        <div className="row-home-section-2">
      <div className="section-home-section-2" style={{ backgroundColor: '#000' }}>
        <h2 data-aos = "fade-right">Mobile App Development</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaAndroid /></i>
        <i data-aos = "zoom-in"><FaApple /></i>
        </div>
      </div>
      <div className="section-home-section-2" style={{ backgroundColor: '#111' }}>
        <h2 data-aos = "fade-right">Web Development</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaShopify /></i>
        <i data-aos = "zoom-in"><FaAngular /></i>
        <i data-aos = "zoom-in"><FaNodeJs /></i>
        <i data-aos = "zoom-in"><FaPython /></i>
        <i data-aos = "zoom-in"><FaAws /></i>
        </div>
      </div>
      <div className="section-home-section-2" style={{ backgroundColor: '#000' }}>
        <h2 data-aos = "fade-right">Data Analytics</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaGoogle /></i>
        <i data-aos = "zoom-in" ><FaChartLine /></i>
        <i data-aos = "zoom-in"><FaStripe /></i>
        <i data-aos = "zoom-in"><FaMailchimp /></i>
        <i data-aos = "zoom-in"><FaAd /></i>
        </div>
      </div>
    </div>
    <div className="row-home-section-2">
      <div className="section-home-section-2" style={{ backgroundColor: '#111' }}>
        <h2 data-aos = "fade-right">Internet of Things (IoT)</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaUniversalAccess /></i>
        <i data-aos = "zoom-in"><FaWaveSquare /></i>
        <i data-aos = "zoom-in"><FaCheckCircle /></i>
        </div>
      </div>
      <div className="section-home-section-2" style={{ backgroundColor: '#000' }}>
        <h2 data-aos = "fade-right">Artificial Intelligence (AI)</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaAws /></i>
        <i data-aos = "zoom-in"><FaGoogle /></i>
        <i data-aos = "zoom-in"><FaMicrosoft /></i>
        </div>
      </div>
      <div className="section-home-section-2" style={{ backgroundColor: '#111' }}>
        <h2 data-aos = "fade-right">Machine Learning</h2>
        <div className='icons-container'>
        <i data-aos = "zoom-in"><FaCloudflare /></i>
        <i data-aos = "zoom-in"><FaShieldAlt /></i>
        <i data-aos = "zoom-in"><FaLock /></i>
        </div>
      </div>
    </div>
    <div className="button-container-home-section-2" data-aos = "fade-right">
      <a href="#">See our Full Stack</a>
    </div>
    </>
  )
}

export default Development
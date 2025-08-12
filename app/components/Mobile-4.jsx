import React from 'react';
import { FaClipboardList, FaPencilRuler, FaCubes, FaCode, FaStar, FaArrowsAlt, FaHeadset } from 'react-icons/fa';

const Mobile_4 = () => {
  return (
    <div className='mobile-4'>
    <div className="container-mobile-4">
      <h2>Process We Follow</h2>
      <p className="subtitle-mobile-4">
        We constantly refine our software development life cycle to develop more efficient workflows that let us make better software faster.
      </p>
      
      <div className="grid-4-mobile-4">
        <div className="process-step-mobile-4">
          <FaClipboardList className="icon-mobile-4" aria-hidden="true" title="Requirement Gathering Icon" />
          <h3>Requirement Gathering</h3>
          <p>Requirement Gathering is the first and very important part of our mobile app development process.</p>
        </div>
        
        <div className="process-step-mobile-4">
          <FaPencilRuler className="icon-mobile-4" aria-hidden="true" title="Design Icon" />
          <h3>Design</h3>
          <p>We create eye catchy design with the help of latest tools of designing.</p>
        </div>
        
        <div className="process-step-mobile-4">
          <FaCubes className="icon-mobile-4" aria-hidden="true" title="Prototype Icon" />
          <h3>Prototype</h3>
          <p>After designing, the prototype of your app gets ready which is sent for development then.</p>
        </div>
        
        <div className="process-step-mobile-4">
          <FaCode className="icon-mobile-4" aria-hidden="true" title="App Development Icon" />
          <h3>App Development</h3>
          <p>The Development gets started on the preferable platforms with complete transparency.</p>
        </div>
      </div>
      
      <div className="grid-3-mobile-4">
        <div className="process-step-mobile-4">
          <FaStar className="icon-mobile-4" aria-hidden="true" title="Quality Assurance Icon" />
          <h3>Quality Assurance</h3>
          <p>We do not compromise in quality so we make sure you get 100% bug free app</p>
        </div>
        
        <div className="process-step-mobile-4">
          <FaArrowsAlt className="icon-mobile-4" aria-hidden="true" title="Deployment Icon" />
          <h3>Deployment</h3>
          <p>Your app is ready to appear on the App store or Play store on this stage of Development.</p>
        </div>
        
        <div className="process-step-mobile-4">
          <FaHeadset className="icon-mobile-4" aria-hidden="true" title="Support & Maintenance Icon" />
          <h3>Support & Maintenance</h3>
          <p>We give support & answer every query after deployment.</p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Mobile_4;
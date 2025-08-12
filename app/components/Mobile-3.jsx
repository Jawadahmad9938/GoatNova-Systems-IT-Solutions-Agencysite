import React from 'react';
import { 
  FaLightbulb, 
  FaMobileAlt, 
  FaCog, 
  FaCogs, 
  FaBriefcase, 
  FaBuilding, 
  FaVrCardboard 
} from 'react-icons/fa';

const Mobile_3 = () => {
  return (
    <section className="expertise-section-mobile-3">
      <h2>We expertise in</h2>
      <div className="expertise-grid-mobile-3">
        <div className="expertise-item-mobile-3">
          <FaLightbulb className="icon-mobile-3 gray-icon-mobile-3" />
          <p>Unique Concept</p>
        </div>
        <div className="expertise-item-mobile-3">
          <div className="icon-combination-mobile-3">
            <FaMobileAlt className="icon-mobile-3 gray-icon-mobile-3" />
            <FaCog className="icon-mobile-3 teal-icon-mobile-3 overlapping-mobile-3 cog-position-1-mobile-3" />
          </div>
          <p>Product Apps</p>
        </div>
        <div className="expertise-item-mobile-3">
          <div className="icon-combination-mobile-3">
            <FaCogs className="icon-mobile-3 gray-icon-mobile-3" />
            <FaCog className="icon-mobile-3 teal-icon-mobile-3 overlapping-mobile-3 cog-position-2-mobile-3" />
          </div>
          <p>SaaS Solutions</p>
        </div>
        <div className="expertise-item-mobile-3">
          <FaBriefcase className="icon-mobile-3 teal-icon-mobile-3" />
          <p>CRM & Business Apps</p>
        </div>
        <div className="expertise-item-mobile-3">
          <FaBuilding className="icon-mobile-3 teal-icon-mobile-3" />
          <p>Enterprise Solutions</p>
        </div>
        <div className="expertise-item-mobile-3">
          <FaVrCardboard className="icon-mobile-3 teal-icon-mobile-3" />
          <p>AR Apps</p>
        </div>
      </div>
    </section>
  );
};

export default Mobile_3;
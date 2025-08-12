import React from 'react';
import { CiMobile3 } from "react-icons/ci";
import { TbDeviceMobileCode } from 'react-icons/tb';
import { MdOutlineAppShortcut, MdOutlineSendToMobile } from "react-icons/md";

const Mobile_2 = () => {
  return (
    <div className="body-mobile-2" role="main">
      <div className="container-mobile-2">
        <h2>Mobile App Development Services We Offer</h2>
        <div className="grid-mobile-2">
          <div className="card-mobile-2">
            <i><CiMobile3 /></i>
            <h3>Native Mobile App Development</h3>
            <p>
              Our mobile app development focuses on creating apps that are native to the operating systems of your business. We meet the technical requirements and develop with the adaptability of iOS and Android to develop the platform with no loss of quality and performance. For more complete tech study, <a className="link-mobile-2" href="#">click here</a>.
            </p>
          </div>
          <div className="card-mobile-2">
            <i><TbDeviceMobileCode /></i>
            <h3>Hybrid Mobile App Development</h3>
            <p>
              Hybrid mobile app development combines the best of both worlds to deliver effective and functional apps. Hybrid technology uses the development and native app's typical approach for custom, cross-platform apps for your complete tech study, <a className="link-mobile-2" href="#">click here</a>.
            </p>
          </div>
          <div className="card-mobile-2">
            <i><MdOutlineSendToMobile /></i>
            <h3>Progressive Web App Development</h3>
            <p>
              Our progressive web app offers you the comfort and capabilities of a native app experience on any device or platform, with better reach, more engagement and lower cost. For more complete tech study, <a className="link-mobile-2" href="#">click here</a>.
            </p>
          </div>
          <div className="card-mobile-2">
            <i><MdOutlineAppShortcut /></i>
            <h3>App Design Services</h3>
            <p>
              We don't only build development. We also supply design solutions for the project's user interface, the employee experience, a straightforward user journey, re-branding and training services, and more for complete control for your app. We also combine offering support and maintenance for your app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_2;
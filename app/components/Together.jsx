import React from 'react'
import { FaEnvelope, FaStar } from 'react-icons/fa'

function Together() {
  return (
    <>
        <div className='tesst'>
    <div className="container-tesst">
        <div className="card-tesst">
            <div className="card-header-tesst">
                Clutch
            </div>
            <div className="card-body-tesst">
                <h2>GoatNova Systems & Marketing</h2>
                <div className="reviews-tesst">
                    <div className="stars-tesst">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                    </div>
                    <div className="review-count-tesst">6 REVIEWS</div>
                </div>
                <div className="quote-tesst">
                    “Their flexibility and our easy access to senior leadership are impressive.”
                </div>
                <div className="author-tesst">
                    Senior Manager, Large Technology Company
                </div>
                <div className="navigation-tesst">
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        <div className="cta-tesst">
            <h1>Let's work together</h1>
            <p>When you need to innovate, you need collaboration.</p>
            <a href="#" className="button-tesst">
                <i className="fas fa-envelope"></i> Drop us a message
            </a>
            {/* <FaEnvelope /> */}
        </div>
    </div>
</div>
    </>
  )
}

export default Together
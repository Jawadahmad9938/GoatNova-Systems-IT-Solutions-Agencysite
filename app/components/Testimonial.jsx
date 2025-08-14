'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import Image from 'next/image'

function Testimonial() {

    useEffect(() =>{
        Aos.init();
      },[])

  return (
    <>


<div className="testimonial">
  <div className="container-testimonial">
   <h1 data-aos = "fade-right">
    Global market leaders trust and recommend us!
   </h1>
   <p data-aos = "zoom-in">
    And here what they have to say about us.
   </p>
   <div className="testimonials-testimonial">
    <div data-aos = "fade-right" className="testimonial-testimonial">
     <p>
      “These guys are wizards. They are really responsive and deliver fantastic results.”
     </p>
     <div className="author-testimonial">
      <img alt="Portrait of Dayne Rusch" height="50" src="https://storage.googleapis.com/a1aa/image/vwHAchWRLX6fMKpkCo20t03zWK1y4CGb6g0G6IXVg1eHgOpTA.jpg" width="50"/>
      <div>
       <div className="name-testimonial">
        Dayne Rusch
       </div>
       <div className="title-testimonial">
        Vice President, Vyper Motors
       </div>
      </div>
     </div>
    </div>
    <div data-aos = "fade-right" className="testimonial-testimonial">
     <p>
      “I have worked with multiple tech firms in my 20 year career, the level of customer service that the team provides is something I have never seen anywhere else. They are definitely a cut above the rest.”
     </p>
     <div className="author-testimonial">
      <img alt="Portrait of Renee Beckman" height="50" src="https://storage.googleapis.com/a1aa/image/g30pxL4RyAoiKZ0ffpfqMh7LnAK7lYVYGtfMcP7jadETA6kOB.jpg" width="50"/>
      <div>
       <div className="name-testimonial">
        Renee Beckman
       </div>
       <div className="title-testimonial">
        CEO, GoWhere
       </div>
      </div>
     </div>
    </div>
    <div data-aos = "fade-right" className="testimonial-testimonial">
     <p>
      “I have used every form of marketing and promotional methods for my hypnosis practice. Their digital marketing efforts now account for over 80% of my business. The results have been more effective than all other forms of advertising combined.”
     </p>
     <div className="author-testimonial">
      <img alt="Portrait of Jay Luck" height="50" src="https://storage.googleapis.com/a1aa/image/ewbmqqrlpfoEKUufGerCmEfzXkJwdNqu6itxUm6iHueWBoT6E.jpg" width="50"/>
      <div>
       <div className="name-testimonial">
        Jay Luck
       </div>
       <div className="title-testimonial">
        President, Wisconsin Hypnosis Center
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>


    </>
  )
}

export default Testimonial
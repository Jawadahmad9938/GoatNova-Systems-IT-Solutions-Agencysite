import React from 'react'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import Together from '../components/Together'
import Footer from '../components/Footer'
import Image from 'next/image'

const Team = () => {
  return (
    <>
      <Navbar />

      <div className='Mobile-main'>
        <div className="container-services">
          <div className="title-services">Meet Our Team</div>
          <div className="subtitle-services">
            Our team is made up of passionate developers, designers, 
            strategists, and problem-solvers who bring their best to every project.
          </div>

          <div className="team-grid flex flex-wrap justify-center gap-8 mt-8">
            <div className="team-member flex flex-col items-center" style={{ maxWidth: '250px' }}>
              <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', border: '3px solid #ccc' }}>
                <img 
                  src="jawad2-removebg-preview3.png" 
                  alt="Jawad Ahmad" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ marginTop: '1rem' }}>Jawad Ahmad</h3>
              <p>CEO & Founder</p>
            </div>

            <div className="team-member flex flex-col items-center" style={{ maxWidth: '250px' }}>
              <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', border: '3px solid #ccc' }}>
                <img 
                  src="ctopic.jpeg" 
                  alt="Zohaib Ahmad Sumbal" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ marginTop: '1rem' }}>Zohaib Ahmad Sumbal</h3>
              <p>CTO</p>
            </div>

            <div className="team-member flex flex-col items-center" style={{ maxWidth: '250px' }}>
              <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', border: '3px solid #ccc' }}>
                <img 
                  src="leadDeveloper.jpeg" 
                  alt="Muhammad Ahsan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ marginTop: '1rem' }}>Muhammad Ahsan</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Together />
      <Footer />
    </>
  )
}

export default Team
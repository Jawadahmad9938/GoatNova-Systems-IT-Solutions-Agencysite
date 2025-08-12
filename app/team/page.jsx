import React from 'react'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import Together from '../components/Together'
import Footer from '../components/Footer'

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

          <div className="team-grid" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div className="team-member" style={{ textAlign: 'center', maxWidth: '250px' }}>
              <img src="jawad2-removebg-preview3.png" alt="Jawad Ahmad" style={{ width: '100%', borderRadius: '50%', border: '3px solid #ccc' }} />
              <h3 style={{ marginTop: '1rem' }}>Jawad Ahmad</h3>
              <p>CEO & Founder</p>
            </div>

            <div className="team-member" style={{ textAlign: 'center', maxWidth: '250px' }}>
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Zohaib Ahmad Sumbal" style={{ width: '100%', borderRadius: '50%', border: '3px solid #ccc' }} />
              <h3 style={{ marginTop: '1rem' }}>Zohaib Ahmad Sumbal</h3>
              <p>CTO</p>
            </div>

            <div className="team-member" style={{ textAlign: 'center', maxWidth: '250px' }}>
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Muhammad Ahsan" style={{ width: '100%', borderRadius: '50%', border: '3px solid #ccc' }} />
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

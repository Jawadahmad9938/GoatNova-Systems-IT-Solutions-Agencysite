import React from 'react'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import Together from '../components/Together'
import Footer from '../components/Footer'

const Careers = () => {
  return (
    <>
      <Navbar />

      <div className='Mobile-main' style={{ paddingBottom: '4rem' }}>
        <div className="container-services">
          <div className="title-services">Join Our Team</div>
          <div className="subtitle-services">
            We&apos;re always looking for creative, passionate, and innovative 
            individuals to help us build the future of technology.
            <br />
            If you want to work on exciting projects, grow your skills, 
            and be part of a driven and friendly team — we&apos;d love to hear from you!
          </div>

          <div 
            className="job-listings" 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {/* Frontend Engineer */}
            <div 
              className="job-card" 
              style={{
                padding: '2rem',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '12px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                textAlign: 'left',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(4px)'
              }}
            >
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: '600' }}>
                Frontend Engineer
              </h3>
              <div style={{ marginBottom: '1.5rem', color: '#ddd', fontSize: '0.95rem' }}>
                <p><strong>Location:</strong> Remote / Hybrid</p>
                <p><strong>Type:</strong> Full-time</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                flexGrow: '1'
              }}>
                <p style={{ margin: '0.5rem 0', fontWeight: '500' }}>
                  React.js / Next.js / Tailwind CSS / TypeScript
                </p>
              </div>
              <button style={{
                background: 'linear-gradient(to right, #00509e, #0077cc)',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                alignSelf: 'flex-start',
                marginTop: 'auto'
              }}>Apply Now</button>
            </div>

            {/* Data Scientist */}
            <div 
              className="job-card" 
              style={{
                padding: '2rem',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '12px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                textAlign: 'left',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(4px)'
              }}
            >
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: '600' }}>
                Data Scientist
              </h3>
              <div style={{ marginBottom: '1.5rem', color: '#ddd', fontSize: '0.95rem' }}>
                <p><strong>Location:</strong> Remote</p>
                <p><strong>Type:</strong> Full-time</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                flexGrow: '1'
              }}>
                <p style={{ margin: '0.5rem 0', fontWeight: '500' }}>
                  Python / Machine Learning / Data Analysis / SQL
                </p>
              </div>
              <button style={{
                background: 'linear-gradient(to right, #cc5200, #e67300)',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                alignSelf: 'flex-start',
                marginTop: 'auto'
              }}>Apply Now</button>
            </div>

            {/* Backend Developer */}
            <div 
              className="job-card" 
              style={{
                padding: '2rem',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '12px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                textAlign: 'left',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(4px)'
              }}
            >
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: '600' }}>
                Backend Developer
              </h3>
              <div style={{ marginBottom: '1.5rem', color: '#ddd', fontSize: '0.95rem' }}>
                <p><strong>Location:</strong> Pakistan / Remote</p>
                <p><strong>Type:</strong> Full-time</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                flexGrow: '1'
              }}>
                <p style={{ margin: '0.5rem 0', fontWeight: '500' }}>
                  Node.js / Express / MongoDB / REST APIs
                </p>
              </div>
              <button style={{
                background: 'linear-gradient(to right, #008000, #00aa00)',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                alignSelf: 'flex-start',
                marginTop: 'auto'
              }}>Apply Now</button>
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

export default Careers

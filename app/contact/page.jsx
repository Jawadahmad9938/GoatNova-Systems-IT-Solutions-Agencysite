import React from 'react'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import Together from '../components/Together'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='Mobile-main'>
        <div className="container-services">
          <div className="title-services">Get in Touch</div>
          <div className="subtitle-services">
            Have questions, ideas, or project inquiries?  
            Fill out the form below and we’ll get back to you as soon as possible.
          </div>

          <form 
            className="contact-form"
            style={{
              maxWidth: '500px',
              margin: '2rem auto',
              background: 'linear-gradient(135deg, #000000, #1a1a1a)',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              color: '#fff'
            }}
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              style={{
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                background: '#222',
                color: '#fff'
              }}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              style={{
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                background: '#222',
                color: '#fff'
              }}
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required
              style={{
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                resize: 'none',
                background: '#222',
                color: '#fff'
              }}
            ></textarea>
            <button 
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #6c63ff, #4a42c7)',
                color: '#fff',
                padding: '0.8rem 1.2rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Testimonial />
      <Together />
      <Footer />
    </>
  )
}

export default Contact

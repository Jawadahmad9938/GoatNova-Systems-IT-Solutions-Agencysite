'use client'
import AOS from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function Counter() {
  const counterRefs = useRef([])
  const [activeCounters, setActiveCounters] = useState([])
  
  useEffect(() => {
    AOS.init()
    
    // Initialize GSAP ScrollTriggers
    counterRefs.current.forEach((ref, index) => {
      if (!ref) return
      
      ScrollTrigger.create({
        trigger: ref,
        start: "top 80%",
        onEnter: () => {
          setActiveCounters(prev => [...prev, index])
        },
        onEnterBack: () => {
          setActiveCounters(prev => [...prev, index])
        },
        onLeave: () => {
          setActiveCounters(prev => prev.filter(i => i !== index))
        },
        onLeaveBack: () => {
          setActiveCounters(prev => prev.filter(i => i !== index))
        }
      })
    })
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Helper function to add refs to our array
  const addToRefs = (el) => {
    if (el && !counterRefs.current.includes(el)) {
      counterRefs.current.push(el)
    }
  }

  const counterItems = [
    { value: 400, suffix: "+", label: "PROJECTS", bgColor: "#000" },
    { value: 10, suffix: "+", label: "YEARS", bgColor: "#222" },
    { value: 96.5, suffix: "%", label: "CUSTOMER RETENTION", bgColor: "#000" },
    { value: 200, suffix: "%+", label: "GROWTH", bgColor: "#222" },
    { value: 5, suffix: "", label: "GLOBAL LOCATIONS", bgColor: "#000" },
    { value: 11, suffix: "", label: "DIFFERENT INDUSTRIES", bgColor: "#222" }
  ]

  return (
    <>
      <div className="bg-black py-20 text-white flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 
            className="text-5xl font-bold mb-8" 
            data-aos="fade-right" 
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Portfolio
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {counterItems.map((item, index) => (
              <div 
                key={index}
                ref={addToRefs}
                data-aos="zoom-in" 
                className="border h-40 w-80 flex items-center justify-center" 
                style={{ borderColor: '#fff', backgroundColor: item.bgColor }}
              >
                <div>
                  <p className="text-4xl font-bold">
                    {activeCounters.includes(index) ? (
                      <CountUp start={0} end={item.value} duration={2.75} suffix={item.suffix} />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </p>
                  <p className="mt-2">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            data-aos="fade-right"
            style={{ color: '#00e0ff', borderColor: '#00e0ff' }}
            className="bg-transparent border-2 px-6 py-2 rounded-full flex items-center justify-center mx-auto transition-colors duration-300 hover:bg-teal-500 hover:text-white"
          >
            <i className="fas fa-arrow-right mr-2"></i> Read More
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter
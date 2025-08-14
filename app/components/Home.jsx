'use client';
import React, { useEffect, useRef } from 'react';
import {
  FaAndroid, FaApple, FaShopify, FaAngular, FaNodeJs, FaPython, FaAws, FaGoogle, FaStripe,
  FaMailchimp, FaBitcoin, FaEthereum, FaMicrosoft, FaCloudflare, FaInfoCircle, FaCloudDownloadAlt,
  FaChartLine, FaAd, FaUniversalAccess, FaWaveSquare, FaCheckCircle, FaShieldAlt, FaLock, FaUsers,
  FaCode, FaCoins, FaPlay, FaTasks, FaLightbulb, FaDatabase, FaComments, FaThumbsUp
} from 'react-icons/fa';
import { BsBrowserChrome, BsSmartwatch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Development from './Development';
import Navbar from '../components/Navbar';
import * as THREE from 'three';
import Image from 'next/image';

function Home() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    AOS.init();

    const mountNode = mountRef.current;
    if (!mountNode) return;

    while (mountNode.firstChild) {
      mountNode.removeChild(mountNode.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Enhanced Animation with Three Objects ---
    // Object 1: Rotating Wireframe Cube
    const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true, transparent: true, opacity: 0.8 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 2, -5);
    scene.add(cube);

    // Object 2: Pulsating Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500, transparent: true, opacity: 0.7 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(3, -1, -4);
    scene.add(sphere);

    // Object 3: Floating Torus Ring
    const torusGeometry = new THREE.TorusGeometry(2, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true, transparent: true, opacity: 0.8 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, -3, -6);
    scene.add(torus);

    // Subtle Particle Field for Depth
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100; // Reduced for subtlety
    const positions = new Float32Array(particlesCount * 3);
    const opacities = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      opacities[i] = Math.random() * 0.5 + 0.2; // Varying opacity for fade effect
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 10;

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Smooth, slow rotation for cube
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;

      // Pulsating effect for sphere
      const scale = 1.5 + 0.2 * Math.sin(Date.now() * 0.0005);
      sphere.scale.set(scale, scale, scale);
      sphere.position.y = -1 + 0.5 * Math.sin(Date.now() * 0.0003);

      // Gentle oscillation for torus
      torus.position.y = -3 + 0.3 * Math.sin(Date.now() * 0.0004);
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.003;

      // Subtle particle movement with fade effect
      const pos = particlesGeometry.attributes.position.array;
      const op = particlesGeometry.attributes.opacity.array;
      for (let i = 0; i < particlesCount; i++) {
        pos[i * 3 + 1] += 0.002 * Math.sin(Date.now() * 0.0002 + i); // Slow vertical drift
        if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
        op[i] = 0.2 + 0.3 * Math.sin(Date.now() * 0.0005 + i); // Fade in/out
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.opacity.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

      if (mountNode && rendererRef.current) {
        try {
          while (mountNode.firstChild) {
            mountNode.removeChild(mountNode.firstChild);
          }
          rendererRef.current.dispose();
          cubeGeometry.dispose();
          cubeMaterial.dispose();
          sphereGeometry.dispose();
          sphereMaterial.dispose();
          torusGeometry.dispose();
          torusMaterial.dispose();
          particlesGeometry.dispose();
          particlesMaterial.dispose();
          while (scene.children.length > 0) {
            scene.remove(scene.children[0]);
          }
        } catch (error) {
          console.warn('Cleanup error:', error);
        }
      }
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="home relative"
        id="image-container"
        style={{
          background: 'linear-gradient(135deg, #000000, #333333)',
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}></div>
        {/* Hero Section (Slogan Overlay) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: '"Bebas Neue", cursive' }}
              data-aos="zoom-in"
            >
              <span className="block">Innovate. Build. Succeed.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
                Digital Excellence Unleashed
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: '"Poppins", sans-serif' }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We transform visionary ideas into powerful digital experiences that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                style={{ fontFamily: '"Poppins", sans-serif' }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                style={{ fontFamily: '"Poppins", sans-serif' }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaInfoCircle className="mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home Section 1 */}
      <div className="home-section-1">
        <div className="container-home-section-1">
          <h1 className="h1-home-section-1" data-aos="fade-right">
            Who we have worked with
          </h1>
          <div className="grid-home-section-1">
            {[
              { src: "/1.jpg", alt: "AER CELL Logo" },
              { src: "/11_1.svg", alt: "BIG GREEN DAO Logo" },
              { src: "/3.jpg", alt: "MARAH NATURAL Logo" },
              { src: "/4.jpg", alt: "VMWARE Logo" },
              { src: "/5.jpg", alt: "DELL Logo" },
              { src: "/6.jpg", alt: "HITACHI Logo" },
              { src: "/7.png", alt: "AUTOMATION ANYWHERE Logo" },
              { src: "/8.jpg", alt: "NATERA Logo" },
              { src: "/9.jpg", alt: "VAHDAM INDIA Logo" },
              { src: "/10.jpg", alt: "USHUR Logo" },
            ].map((img, i) => (
              <div key={i} className="grid-item-home-section-1" data-aos="zoom-in">
                <Image src={img.src} alt={img.alt} width={200} height={100} />
              </div>
            ))}
          </div>
          <div className="view-more-home-section-1" data-aos="fade-right">
            <a href="#">View More</a>
          </div>
        </div>
      </div>

      {/* Home Section 2 */}
      <div className="home-section-2">
        <div className="container-home-section-2">
          <h1 data-aos="zoom-in">What We Do?</h1>
          <Development />
        </div>
      </div>

      {/* Home Section 3 */}
      <div className="home-section-3">
        <div className="container-home-section-3">
          <h1 data-aos="fade-right">Product</h1>
          <p data-aos="zoom-in">
            We have the experience and expertise in building enterprise grade mobile applications and provide end to end IT solutions to industry specific demands.
          </p>
          <div className="product-section-home-section-3">
            <div className="product-home-section-3" data-aos="fade-right">
              <Image alt="Purchase approval" src="/purchase-approval.png" width={300} height={200} />
              <div className="product-title-home-section-3">Purchase approval</div>
            </div>
            <div className="product-home-section-3" data-aos="fade-right">
              <Image alt="Board meeting" src="/board-meeting.png" width={300} height={200} />
              <div className="product-title-home-section-3">Board meeting</div>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      {/* Culture Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
        <h1 data-aos="fade-right" className="text-5xl font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          Our Culture
        </h1>
        <p data-aos="zoom-in" className="text-gray-600 text-lg mb-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
          This is how we go about achieving excellence in what we do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12" style={{ fontFamily: '"Poppins", sans-serif' }}>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaPlay style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Keep it simple</p></div>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaLightbulb style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Focusing on productivity</p></div>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaComments style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Straight forward communication</p></div>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaTasks style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Constant improvement evaluation</p></div>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaDatabase style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Data driven decision making</p></div>
          <div data-aos="fade-right" className="flex flex-col items-center w-full md:w-64"><FaThumbsUp style={{ color: '#00e0ff' }} className="mb-4" size={48} /><p className="font-semibold text-lg">Positive attitude</p></div>
        </div>
        <button data-aos="zoom-in" className="px-6 py-3 border border-teal-500 rounded-full flex items-center text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300" style={{ color: '#00e0ff', fontFamily: '"Poppins", sans-serif' }}>
          <FaInfoCircle className="mr-2" /> More about us
        </button>
      </div>

      {/* Stack Section */}
      <div className="stack">
        <div className="container-stack">
          <h1 data-aos="fade-right">Our Technology Stack</h1>
          <p data-aos="fade-right">We use modern, proven technologies and approaches that allow us to effectively extend and scale our products.</p>
          <div className="tech-icons-stack">
            <div className="tech-item-stack"><BsBrowserChrome /><p>Web</p></div>
            <div className="tech-item-stack"><FaApple /><p>iOS</p></div>
            <div className="tech-item-stack"><IoLogoAndroid /><p>Android</p></div>
            <div className="tech-item-stack"><BsSmartwatch /><p>Wearables</p></div>
            <div className="tech-item-stack"><FaCloudDownloadAlt /><p>CloudOps</p></div>
            <div className="tech-item-stack"><FaShieldAlt /><p>IT Security</p></div>
          </div>
          <div className="button-container-stack"><a href="#">See our Tech Stack</a></div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
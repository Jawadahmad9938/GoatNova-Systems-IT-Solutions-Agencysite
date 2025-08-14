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
import Image from 'next/image'; // ✅ Next.js optimized Image

function Home() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    AOS.init();

    const mountNode = mountRef.current; // ✅ Local variable fix
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

    // --- Shapes ---
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
    for (let i = 0; i < 3; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      cubes.push(cube);
      scene.add(cube);
    }

    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500, transparent: true, opacity: 0.7 });
    for (let i = 0; i < 2; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(Math.random() * 15 - 7.5, Math.random() * 15 - 7.5, Math.random() * 15 - 7.5);
      spheres.push(sphere);
      scene.add(sphere);
    }

    const rings = [];
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(Math.random() * 12 - 6, Math.random() * 12 - 6, Math.random() * 12 - 6);
      rings.push(ring);
      scene.add(ring);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const glowParticlesGeometry = new THREE.BufferGeometry();
    const glowCount = 50;
    const glowPositions = new Float32Array(glowCount * 3);
    for (let i = 0; i < glowCount * 3; i++) {
      glowPositions[i] = (Math.random() - 0.5) * 30;
    }
    glowParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
    const glowMaterial = new THREE.PointsMaterial({ color: 0xff00ff, size: 0.15 });
    const glowParticles = new THREE.Points(glowParticlesGeometry, glowMaterial);
    scene.add(glowParticles);

    const movers = [];
    const moverGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const moverMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    for (let i = 0; i < 8; i++) {
      const mover = new THREE.Mesh(moverGeometry, moverMaterial);
      mover.position.set(Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * 20 - 10);
      mover.userData.speed = Math.random() * 0.05 + 0.02;
      movers.push(mover);
      scene.add(mover);
    }

    camera.position.z = 8;

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      spheres.forEach((sphere, idx) => {
        sphere.position.x += 0.02 * Math.sin(Date.now() * 0.001 + idx);
        sphere.position.y += 0.02 * Math.cos(Date.now() * 0.001 + idx);
      });

      rings.forEach((ring, idx) => {
        ring.rotation.x += 0.005;
        ring.rotation.y += 0.005;
        ring.position.x += 0.002 * Math.sin(Date.now() * 0.001 + idx);
      });

      const pos = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        pos[i * 3 + 1] += 0.005 * (Math.random() - 0.5);
        if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -15;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      const gpos = glowParticlesGeometry.attributes.position.array;
      for (let i = 0; i < glowCount; i++) {
        gpos[i * 3 + 1] += 0.01;
        if (gpos[i * 3 + 1] > 15) gpos[i * 3 + 1] = -15;
      }
      glowParticlesGeometry.attributes.position.needsUpdate = true;

      movers.forEach(mover => {
        mover.position.z += mover.userData.speed;
        if (mover.position.z > 10) {
          mover.position.z = -10;
          mover.position.x = Math.random() * 20 - 10;
          mover.position.y = Math.random() * 10 - 5;
        }
      });

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
          ringGeometry.dispose();
          ringMaterial.dispose();
          particlesGeometry.dispose();
          particlesMaterial.dispose();
          glowParticlesGeometry.dispose();
          glowMaterial.dispose();
          moverGeometry.dispose();
          moverMaterial.dispose();
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
        className="home"
        id="image-container"
        ref={mountRef}
        style={{
          background: 'linear-gradient(135deg, #000000, #333333)',
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      ></div>

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

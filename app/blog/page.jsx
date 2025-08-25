'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import * as THREE from 'three';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts, allCategories } from '../data/blogs';

// Card Component
function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.24)]">
        <div className="relative h-48 md:h-56">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow">
              {post.category}
            </span>
          </div>
        </div>
        <div className="flex h-full flex-col gap-3 p-5 md:p-6">
          <h3 className="line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300 md:text-xl">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm text-gray-300/90">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
            <time className="text-xs text-gray-400">{post.date}</time>
            <span className="text-sm font-medium text-indigo-300 transition group-hover:translate-x-0.5">Read more →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Main Blog Page
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const canvasRef = useRef(null);

  // Prevent horizontal scroll
  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = prev;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    const t = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesText = !t || post.title.toLowerCase().includes(t) || post.excerpt.toLowerCase().includes(t);
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesText && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  // Three.js Background
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 300 : 600;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
      
      const hue = 0.6 + Math.random() * 0.2;
      color.setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * (isMobile ? 0.8 : 1.5) + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 2 : 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);
    
    const geometryTypes = [
      new THREE.TetrahedronGeometry(3, 0),
      new THREE.OctahedronGeometry(3, 0),
      new THREE.IcosahedronGeometry(3, 0),
      new THREE.SphereGeometry(2.5, 12, 12)
    ];
    
    const shapeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x4fc3f7, transparent: true, opacity: 0.2, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x9575cd, transparent: true, opacity: 0.2, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x64ffda, transparent: true, opacity: 0.2, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.2, wireframe: true })
    ];
    
    for (let i = 0; i < 12; i++) {
      const geometryIndex = i % geometryTypes.length;
      const materialIndex = i % shapeMaterials.length;
      
      const mesh = new THREE.Mesh(geometryTypes[geometryIndex], shapeMaterials[materialIndex]);
      
      mesh.position.x = (Math.random() - 0.5) * 120;
      mesh.position.y = (Math.random() - 0.5) * 120;
      mesh.position.z = (Math.random() - 0.5) * 120;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      mesh.userData = {
        speed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005
        },
        moveSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      };
      
      shapesGroup.add(mesh);
    }

    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i] * delta * 10;
        positions[i + 1] += velocities[i + 1] * delta * 10;
        positions[i + 2] += velocities[i + 2] * delta * 10;
        
        if (Math.abs(positions[i]) > 100) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 100) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 100) velocities[i + 2] *= -1;
      }
      geometry.attributes.position.needsUpdate = true;
      
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      shapesGroup.children.forEach(shape => {
        shape.rotation.x += shape.userData.speed.x;
        shape.rotation.y += shape.userData.speed.y;
        shape.rotation.z += shape.userData.speed.z;
        
        shape.position.x += Math.sin(time + shape.position.x) * 0.01;
        shape.position.y += Math.cos(time + shape.position.y) * 0.01;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-30" />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-28">
        <section className="relative mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md md:mt-10 md:p-8">
          <h1 className="text-3xl font-bold md:text-4xl">GoatNova Blog</h1>
          <p className="mt-2 max-w-2xl text-base text-slate-300 md:text-lg">
            Insights, trends, and innovations from GoatNova Systems.
          </p>
        </section>
        <section className="sticky top-0 z-10 mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xl">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-xl border border-white/10 bg-slate-800/80 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                aria-label="Search blog posts"
              />
              <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={[
                        'rounded-full px-4 py-2 text-sm font-medium transition',
                        active
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10',
                      ].join(' ')}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">
            {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
          </h2>
          <span className="text-sm text-slate-400">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </span>
        </div>
        {filteredPosts.length > 0 ? (
          <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </section>
        ) : (
          <section className="mt-10 flex items-center justify-center">
            <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
              <h3 className="text-lg font-semibold">No posts found</h3>
              <p className="mt-2 text-slate-300">
                Try adjusting your search or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
              >
                Clear filters
              </button>
            </div>
          </section>
        )}
        <div className="h-10" />
      </main>
      <Footer />
    </div>
  );
}
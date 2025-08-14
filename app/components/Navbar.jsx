'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import './navbar.css';
import Image from 'next/image' // ✅ Import Next.js Image component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      title: "Services",
      dropdown: [
        { name: "Mobile App Development", link: "mobile-app-development" },
        { name: "Web Development", link: "./web-development" },
        { name: "Artificial Intelligence (AI)", link: "" },
        { name: "Machine Learning", link: "" },
        { name: "Generative AI", link: "" },
        { name: "Data Analytics", link: "" },
        { name: "Internet of Things (IoT)", link: "" },
        { name: "Digital Marketing", link: "" },
        { name: "Remote Technology Staffing", link: "" }
      ]
    },
    {
      title: "Products",
      dropdown: [
        { name: "Consulting", link: "" },
        { name: "Development", link: "" },
        { name: "Testing", link: "" },
        { name: "Maintenance", link: "" }
      ]
    },
    { title: "Solutions", link: "" },
    {
      title: "Resources",
      dropdown: [
        { name: "Blog", link: "" },
        { name: "Case Studies", link: "" },
        { name: "Whitepapers", link: "" },
        { name: "Webinars", link: "" },
        { name: "Tutorials", link: "" }
      ]
    },
    {
      title: "Company",
      dropdown: [
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/team" },
        { name: "Careers", link: "/careers" },
        { name: "Contact", link: "/contact" }
      ]
    }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link href="/" onClick={closeAll}>
            <img
              src="/navbar logo.png"
              alt="GoatNova Systems"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className={activeDropdown === index ? 'active' : ''}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={activeDropdown === index}
                      aria-controls={`dropdown-${index}`}
                    >
                      {item.title}
                      {activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {activeDropdown === index && (
                      <div
                        id={`dropdown-${index}`}
                        className="dropdown-menu full-width"
                      >
                        <div className="dropdown-container">
                          <div className="dropdown-grid">
                            {item.dropdown.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.link}
                                className="dropdown-item"
                                onClick={closeAll}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.link} onClick={closeAll}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

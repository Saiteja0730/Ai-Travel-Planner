import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: '/dash', label: 'Dashboard' },
    { path: '/destiny', label: 'Destinations' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
    { path: '/book', label: 'Book Now' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Travel App</Link>
        
        <div className="d-lg-none">
          <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.path} className="nav-link" onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

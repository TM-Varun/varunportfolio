import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#111', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', gap: '20px' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
        <li><Link to="/certifications" style={{ color: '#fff', textDecoration: 'none' }}>Certifications</Link></li>
        <li><Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

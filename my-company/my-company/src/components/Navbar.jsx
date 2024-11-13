import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const styles = {
        nav: {
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 0',
          backgroundColor: '#333',
        },
        link: {
          margin: '0 15px',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.2rem',
        },
      };
    
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/about">About</Link>
      <Link style={styles.link} to="/services">Services</Link>
      <Link style={styles.link} to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar

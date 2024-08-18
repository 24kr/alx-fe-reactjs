// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#333', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'center', // Center the items horizontally
      alignItems: 'center' // Center the items vertically
    }}>
      <Link to="/" style={{ 
        margin: '0 15px', 
        color: '#fff', 
        textDecoration: 'none' 
      }}>Home</Link>
      <Link to="/about" style={{ 
        margin: '0 15px', 
        color: '#fff', 
        textDecoration: 'none' 
      }}>About</Link>
      <Link to="/services" style={{ 
        margin: '0 15px', 
        color: '#fff', 
        textDecoration: 'none' 
      }}>Services</Link>
      <Link to="/contact" style={{ 
        margin: '0 15px', 
        color: '#fff', 
        textDecoration: 'none' 
      }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

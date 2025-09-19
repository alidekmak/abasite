import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#556B7D',
      color: 'white',
      marginTop: 'auto',
      width: '100%'
    }}>
      <div className="container-content">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          padding: '4rem 0'
        }}>
          <div>
            <img 
              src="/logo.png" 
              alt="Nurture Nest Pediatric Therapy Logo" 
              style={{
                height: '50px',
                width: 'auto',
                marginBottom: '0.5rem',
                filter: 'brightness(0) invert(1)'
              }}
            />
            <p style={{fontStyle: 'italic', color: '#F5B895', fontSize: '0.9rem', marginBottom: '1rem'}}>
              Nurturing Every Milestone with Compassion and Care
            </p>
            <p style={{fontStyle: 'italic', color: '#F7F3E9'}}>
              Nurturing each child's growth through compassionate, evidence-based pediatric therapy.
            </p>
          </div>
          
          <div>
            <h4 style={{color: '#F5B895', marginBottom: '1rem'}}>Quick Links</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.5rem'}}><Link to="/services" style={{color: 'white', textDecoration: 'none'}}>Services</Link></li>
              <li style={{marginBottom: '0.5rem'}}><Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About Us</Link></li>
              <li style={{marginBottom: '0.5rem'}}><Link to="/career" style={{color: 'white', textDecoration: 'none'}}>Careers</Link></li>
              <li style={{marginBottom: '0.5rem'}}><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{color: '#F5B895', marginBottom: '1rem'}}>Contact Info</h4>
            <p>Phone: 313-429-9124</p>
            <p>Email: info@nurturenestpc.com</p>
            <p>Address: 22005 Outer Drive<br />Dearborn, MI 48124</p>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem 0',
          textAlign: 'center',
          color: '#F7F3E9'
        }}>
          <p>&copy; 2025 NurtureNest Pediatric Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

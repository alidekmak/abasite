import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    // { path: '/students', label: 'Students' },
    { path: '/career', label: 'Career' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header style={{
      backgroundColor: '#fafafa',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%'
    }}>
      <div className="container-content">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <Link to="/" onClick={handleLogoClick} style={{textDecoration: 'none'}}>
            <img 
              src="/logo.png" 
              alt="Nurture Nest Pediatric Therapy Logo" 
              style={{height: '60px', width: 'auto'}}
            />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={handleMenuToggle}
            style={{
              display: 'none',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            <span style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#556B7D',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#556B7D',
              margin: '3px 0',
              transition: '0.3s',
              opacity: isMenuOpen ? '0' : '1'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#556B7D',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}></span>
          </button>
          
          <nav className="desktop-nav">
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0
            }}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    onClick={handleNavClick}
                    style={{
                      textDecoration: 'none',
                      color: location.pathname === item.path ? 'white' : '#556B7D',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: location.pathname === item.path ? '#8FA0B2' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        <nav 
          className="mobile-nav"
          style={{
            display: isMenuOpen ? 'block' : 'none',
            backgroundColor: '#fafafa',
            borderTop: '1px solid #e0e0e0',
            paddingBottom: '1rem'
          }}
        >
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: '1rem 0 0 0'
          }}>
            {navigation.map((item) => (
              <li key={item.path} style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to={item.path}
                  onClick={handleNavClick}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? 'white' : '#556B7D',
                    fontWeight: '500',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: location.pathname === item.path ? '#8FA0B2' : 'transparent',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiBuildingOffice2,
  HiHome
} from 'react-icons/hi2';
import { usePageMeta } from '../usePageMeta';

function Contact() {
  usePageMeta({
    title: 'Contact NurtureNest Pediatric Therapy | Schedule A Consultation',
    description:
      'Contact NurtureNest Pediatric Therapy in Dearborn, MI to ask questions, verify insurance, or schedule an ABA therapy consultation for your child.'
  });
  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      details: ['313-429-9124', 'Call for appointments or questions'],
      action: 'tel:+13134299124'
    },
    {
      icon: HiEnvelope,
      title: 'Email',
      details: ['info@nurturenestpc.com', 'We respond within 24 hours'],
      action: 'mailto:info@nurturenestpc.com'
    },
    {
      icon: HiMapPin,
      title: 'Address',
      details: ['22005 Outer Drive', 'Dearborn, MI 48124'],
      action: null
    },
    {
      icon: HiBuildingOffice2,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 4:30 PM', 'Sat-Sun: Closed'],
      action: null
    },
    {
      icon: HiHome,
      title: 'In-Home Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat: 8:00 AM - 4:00 PM', 'Sun: Closed'],
      action: null
    }
  ];

  const whyChooseUs = [
    'Free initial consultations',
    'Flexible scheduling options',
    'Insurance accepted',
    'Family-centered approach',
    'Evidence-based practices',
    'Nature-inspired environment'
  ];

  return (
    <div className="contact-page" style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-sage), var(--color-forest-green))',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="container-content">
          <h1 style={{
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            color: 'white',
            fontWeight: '700'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Ready to start your child's journey? We're here to help you every step of the way
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Optimized Layout */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          {/* Top Row - 3 Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {contactInfo.slice(0, 3).map((info, index) => (
              <div key={index} className="card" style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: info.action ? 'pointer' : 'default',
                minHeight: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onClick={() => info.action && window.open(info.action)}
              onMouseEnter={(e) => {
                if (info.action) {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (info.action) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                }
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: 'var(--color-forest-green)'
                }}>
                  <info.icon size={48} />
                </div>
                <h3 style={{
                  color: 'var(--color-forest-green)',
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} style={{
                    color: 'var(--color-forest-green)',
                    margin: '0.5rem 0',
                    opacity: i === 0 ? '1' : '0.7',
                    fontWeight: i === 0 ? '600' : 'normal'
                  }}>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards (Centered) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {contactInfo.slice(3, 5).map((info, index) => (
              <div key={index} className="card" style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: info.action ? 'pointer' : 'default',
                minHeight: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onClick={() => info.action && window.open(info.action)}
              onMouseEnter={(e) => {
                if (info.action) {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (info.action) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                }
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: 'var(--color-forest-green)'
                }}>
                  <info.icon size={48} />
                </div>
                <h3 style={{
                  color: 'var(--color-forest-green)',
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} style={{
                    color: 'var(--color-forest-green)',
                    margin: '0.5rem 0',
                    opacity: i === 0 ? '1' : '0.7',
                    fontWeight: i === 0 ? '600' : 'normal'
                  }}>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Form Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Left Column - Tally Form and Call to Action */}
            <div>
              {/* Tally Form */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(156, 175, 136, 0.2)',
                marginBottom: '2rem'
              }}>
                <iframe 
                  src="https://tally.so/r/mVgvva"
                  width="100%"
                  frameBorder="0"
                  style={{
                    minHeight: '700px',
                    borderRadius: '8px',
                    border: 'none',
                    width: '100%',
                    display: 'block'
                  }}
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* "Ready to Get Started" box */}
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'white',
                border: '2px solid var(--color-sage)',
                borderRadius: '12px'
              }}>
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '1rem',
                  fontSize: '1.4rem'
                }}>
                  Ready to Get Started?
                </h3>
                <p style={{
                  marginBottom: '1.5rem',
                  color: 'var(--color-forest-green)',
                  opacity: '0.8'
                }}>
                  Schedule your free consultation today
                </p>
                <a
                  href="tel:+13134299124"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: 'var(--color-terracotta)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-clay-brown)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--color-terracotta)';
                  }}
                >
                  Call Now: 313-429-9124
                </a>
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Why Choose NurtureNest?
              </h2>
              
              {/* Office/therapy space image */}
              <div style={{
                width: '100%',
                height: '250px',
                backgroundImage: 'url("/office/office3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                marginBottom: '2rem'
              }}></div>
              
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                color: 'var(--color-forest-green)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>
                We're committed to providing exceptional care that makes a real difference in your child's development.
              </p>

              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '2.5rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
              }}>
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '1.5rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  What Sets Us Apart:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {whyChooseUs.map((item, index) => (
                    <li key={index} style={{
                      padding: '0.8rem 0',
                      position: 'relative',
                      paddingLeft: '2rem',
                      color: 'var(--color-forest-green)',
                      borderBottom: index < whyChooseUs.length - 1 ? '1px solid rgba(156, 175, 136, 0.2)' : 'none'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--color-sage)',
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours and Location Section */}
      <section style={{
        padding: '60px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              border: '1px solid rgba(156, 175, 136, 0.1)'
            }}>
              <h3 style={{
                color: 'var(--color-forest-green)',
                marginBottom: '1.5rem',
                fontSize: '1.6rem',
                fontWeight: '600'
              }}>
                Office Hours
              </h3>
              <div style={{
                display: 'grid',
                gap: '1rem',
                fontSize: '1.1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Monday - Friday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>8:00 AM - 4:30 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Saturday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>Closed</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Sunday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>Closed</span>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              border: '1px solid rgba(156, 175, 136, 0.1)'
            }}>
              <h3 style={{
                color: 'var(--color-forest-green)',
                marginBottom: '1.5rem',
                fontSize: '1.6rem',
                fontWeight: '600'
              }}>
                In-Home Services
              </h3>
              <div style={{
                display: 'grid',
                gap: '1rem',
                fontSize: '1.1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Monday - Friday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>8:00 AM - 8:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Saturday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>8:00 AM - 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600', color: 'var(--color-forest-green)' }}>Sunday:</span>
                  <span style={{ color: 'var(--color-forest-green)' }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

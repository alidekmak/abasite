import React, { useState } from 'react';
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiBuildingOffice2,
  HiHome
} from 'react-icons/hi2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(''); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      // Use relative path for API endpoint (works in both dev and production)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

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

      {/* Contact Info Cards */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {contactInfo.map((info, index) => (
              <div key={index} className="card" style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: info.action ? 'pointer' : 'default'
              }}
              onClick={() => info.action && window.open(info.action)}
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

      {/* Contact Form and Info Section */}
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
            {/* Contact Form */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Send Us a Message
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                color: 'var(--color-forest-green)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>
                Have questions about our services? Ready to schedule a consultation? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: 'var(--color-forest-green)',
                      fontWeight: '500'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '1px solid var(--color-sage)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'rgba(156, 175, 136, 0.1)', // Very light sage
                        color: 'var(--color-forest-green)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--color-forest-green)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(53, 94, 59, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--color-sage)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: 'var(--color-forest-green)',
                      fontWeight: '500'
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '1px solid var(--color-sage)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'rgba(156, 175, 136, 0.1)', // Very light sage
                        color: 'var(--color-forest-green)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--color-forest-green)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(53, 94, 59, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--color-sage)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-forest-green)',
                    fontWeight: '500'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--color-sage)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(156, 175, 136, 0.1)', // Very light sage
                      color: 'var(--color-forest-green)',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-forest-green)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(53, 94, 59, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-sage)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-forest-green)',
                    fontWeight: '500'
                  }}>
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--color-sage)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(156, 175, 136, 0.1)', // Very light sage
                      color: 'var(--color-forest-green)',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-forest-green)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(53, 94, 59, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-sage)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="aba">ABA Therapy</option>
                    <option value="speech-therapy">Speech Therapy</option>
                    <option value="occupational">Occupational Therapy</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-forest-green)',
                    fontWeight: '500'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your child's needs or any questions you have..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--color-sage)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(156, 175, 136, 0.1)', // Very light sage
                      color: 'var(--color-forest-green)',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-forest-green)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(53, 94, 59, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-sage)';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: submitStatus === 'loading' ? '#ccc' : 'var(--color-sage)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: submitStatus === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    border: '1px solid #f5c6cb',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    ❌ Failed to send message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Why Choose Us */}
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
                    fontSize: '1.1rem'
                  }}
                >
                  Call Now: 313-429-9124
                </a>
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
              textAlign: 'center'
            }}>
              <h3 style={{
                color: 'var(--color-forest-green)',
                marginBottom: '1.5rem',
                fontSize: '1.6rem'
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
              textAlign: 'center'
            }}>
              <h3 style={{
                color: 'var(--color-forest-green)',
                marginBottom: '1.5rem',
                fontSize: '1.6rem'
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

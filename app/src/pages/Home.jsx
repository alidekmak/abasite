import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi2';
import { usePageMeta } from '../usePageMeta';


function Home() {
  usePageMeta({
    title: 'ABA Therapy In Dearborn, MI | Play Based | NurtureNest',
    description:
      'NurtureNest Pediatric Therapy provides compassionate play-based ABA therapy and parent support in Dearborn, MI to help children build skills and confidence.'
  });

  const slideImages = [
    '/thekids/thekids1.jpg',
    '/thekids/thekids2.jpg',
    '/thekids/thekids4.jpg',
    '/thekids/thekids5.jpg',
    '/thekids/thekids6.jpg',
    '/thekids/thekids7.jpg',
    '/thekids/thekids9.jpg'
  ];


  const officeImages = [
    '/office/office2.jpg',
    '/office/office3.jpg',
    '/office/office4.jpg',
    '/office/office5.jpg',
    '/office/office6.jpg',
    '/office/office7.jpg',
    '/office/office8.jpg',
    '/office/office9.jpg',
    '/office/office10.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOfficeSlide, setCurrentOfficeSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slideImages.length]);

  useEffect(() => {
    const officeTimer = setInterval(() => {
      setCurrentOfficeSlide((prev) => (prev + 1) % officeImages.length);
    }, 4000); // Change office slide every 4 seconds

    return () => clearInterval(officeTimer);
  }, [officeImages.length]);

  const services = [
    { 
      name: 'Center Based ABA Services', 
      description: 'Individualized ABA Therapy in our thoughtfully designed center with skilled Behavior Technicians and BCBAs',
      icon: '/services/CenterBased ABA.png'
    },
    { 
      name: 'In-Home ABA Services', 
      description: 'High-quality ABA Therapy in the comfort of your home with dedicated Behavior Technicians and BCBAs',
      icon: '/services/home.png'
    },
    { 
      name: 'Parent Training', 
      description: 'Empowering families with tools and knowledge led by Board-Certified Behavior Analysts',
      icon: '/services/parent-training.png'
    },
    { 
      name: 'Community Outings', 
      description: 'Fun, real-world learning experiences where children practice important life skills in supportive settings',
      icon: '/services/community.png'
    },
    { 
      name: 'Speech Therapy', 
      description: 'On-site Speech Therapy services through our partnership with Simpli Speech',
      icon: '/services/simplespeech.png'
    },
    { 
      name: 'Occupational Therapy', 
      description: 'On-site occupational therapy services through our partnership with Motivate Children\'s Therapy',
      icon: '/services/childrensmotivatetherapy.png'
    }
  ];

  return (
    <div className="home" style={{ width: '100%' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .hero {
              padding: 50px 0 60px 0 !important;
            }
            .hero > div[style*="position: absolute"] {
              display: none !important;
            }
            .hero::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: linear-gradient(rgba(85, 107, 125, 0.4), rgba(85, 107, 125, 0.4)), url('/thekids/thekids9.jpg');
              background-size: cover;
              background-position: center;
              z-index: 1;
            }
            .hero .container-content {
              position: relative;
              z-index: 2;
            }
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--color-sage) 0%, var(--color-forest-green) 100%)',
        color: 'white',
        padding: '60px 0 80px 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Image Cards */}
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '5%',
          width: '180px',
          height: '130px',
          backgroundImage: 'url("/thekids/thekids1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transform: 'rotate(-8deg)',
          zIndex: 1,
          opacity: '0.9',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'rotate(0deg) scale(1.1)';
          e.target.style.zIndex = '10';
          e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'rotate(-8deg) scale(1)';
          e.target.style.zIndex = '1';
          e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        ></div>
        
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '8%',
          width: '160px',
          height: '120px',
          backgroundImage: 'url("/office/office3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transform: 'rotate(6deg)',
          zIndex: 1,
          opacity: '0.9',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'rotate(0deg) scale(1.1)';
          e.target.style.zIndex = '10';
          e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'rotate(6deg) scale(1)';
          e.target.style.zIndex = '1';
          e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        ></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '8%',
          width: '150px',
          height: '110px',
          backgroundImage: 'url("/thekids/thekids5.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transform: 'rotate(12deg)',
          zIndex: 1,
          opacity: '0.8',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'rotate(0deg) scale(1.1)';
          e.target.style.zIndex = '10';
          e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'rotate(12deg) scale(1)';
          e.target.style.zIndex = '1';
          e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        ></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '5%',
          width: '170px',
          height: '115px',
          backgroundImage: 'url("/thekids/thekids8.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transform: 'rotate(-10deg)',
          zIndex: 1,
          opacity: '0.8',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'rotate(0deg) scale(1.1)';
          e.target.style.zIndex = '10';
          e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'rotate(-10deg) scale(1)';
          e.target.style.zIndex = '1';
          e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        }}
        ></div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '15%',
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '130px',
          right: '20%',
          width: '25px',
          height: '25px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '120px',
          left: '25%',
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '70px',
          left: '65%',
          width: '35px',
          height: '35px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '150px',
          right: '12%',
          width: '20px',
          height: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.18)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '10%',
          width: '28px',
          height: '28px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div className="container-content" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content" style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <h1 className="hero-title" style={{ 
              fontSize: '3rem', 
              marginBottom: '1.2rem',
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Nurturing Growth, One Child at a Time
            </h1>
            <p className="hero-subtitle" style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem',
              opacity: '0.95',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
              fontWeight: '300'
            }}>
              Evidence-based pediatric therapy in a warm, supportive environment where children thrive and families feel empowered on their journey to growth and development.
            </p>
            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/services" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600'
              }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: 'var(--color-forest-green)'
            }}>
              Comprehensive Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-forest-green)',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: '0.8'
            }}>
              We offer personalized, play-based ABA therapy that meets your child where they are and supports their individual developmental goals.
            </p>
          </div>
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {services.map((service, index) => (
              <div key={index} className="service-card card" style={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: 'white',
                border: '1px solid rgba(156, 175, 136, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img 
                    src={service.icon} 
                    alt={`${service.name} icon`}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: 'var(--color-forest-green)'
                }}>
                  {service.name}
                </h3>
                <p style={{
                  color: 'var(--color-forest-green)',
                  opacity: '0.8',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Therapy Environment Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            margin: '4rem 0'
          }}>
            <div>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                A Nurturing Environment
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--color-forest-green)',
                opacity: '0.8'
              }}>
                Our clinic is thoughtfully designed to create a calming, welcoming space where children feel comfortable and ready to learn. Every detail reflects our commitment to providing therapy that feels natural and nurturing.
              </p>
            </div>
            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url("/thekids/thekids6.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }}></div>
          </div>
          
          <div className="section-cta" style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-sage)',
        color: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '6rem', 
            alignItems: 'center',
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            {/* Mission Text */}
            <div style={{ textAlign: 'left' }}>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                color: 'white'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
                opacity: '0.95'
              }}>
                At NurtureNest, our mission is to empower children and their families by providing 
                individualized, evidence-based therapy in a nurturing and supportive environment. 
                We are committed to helping each child build meaningful skills in communication, 
                behavior, social interaction, and daily living through therapy services and proven approaches.
              </p>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                opacity: '0.9',
                fontStyle: 'italic'
              }}>
                At our BCBA-owned practice, your child's growth and well-being are always our top priority! 
                Our goal is to celebrate every child's unique potential, promote independence, and support 
                families as vital partners in the journey toward lifelong growth and success.
              </p>
            </div>

            {/* Slideshow */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '15px', 
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
              aspectRatio: '4/3'
            }}>
              <img 
                src={slideImages[currentSlide]} 
                alt={`Children at therapy ${currentSlide + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Slideshow Dots */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: index === currentSlide ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                      cursor: 'pointer',
                      transition: 'backgroundColor 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: 'var(--color-forest-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'backgroundColor 0.3s ease, opacity 0.3s ease',
                  opacity: '0.7'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.6)';
                  e.target.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.4)';
                  e.target.style.opacity = '0.7';
                }}
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: 'var(--color-forest-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'backgroundColor 0.3s ease, opacity 0.3s ease',
                  opacity: '0.7'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.6)';
                  e.target.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.4)';
                  e.target.style.opacity = '0.7';
                }}
              >
                ›
              </button>
            </div>
          </div>

          {/* Responsive Design for Mobile */}
          <style jsx>{`
            @media (max-width: 768px) {
              .mission-section > div > div {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
                text-align: center !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section" style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)'
              }}>
                Why Choose NurtureNest?
              </h2>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem'
                }}>
                  ✓ BCBA-Owned Practice
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Our Board Certified Behavior Analyst-owned practice ensures the highest quality of care with evidence-based approaches tailored to each child's unique needs.
                </p>
                
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem'
                }}>
                  🌟 Individualized Approach
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  We celebrate every child's unique potential and create personalized therapy plans focused on communication, behavior, social interaction, and daily living skills.
                </p>
                
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <HiUserGroup size={24} /> Family Partnership
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  We support families as vital partners in the journey toward lifelong growth and success, promoting independence and meaningful progress at home.
                </p>
              </div>
              <Link to="/about" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Learn About Our Team
              </Link>
            </div>
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '3rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)'
              }}>
                Visit Our Clinic
              </h3>
              <div style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '320px',
                  height: '220px',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={officeImages[currentOfficeSlide]} 
                    alt={`Our clinic interior ${currentOfficeSlide + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  />
                  {/* Slideshow indicator dots */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '6px'
                  }}>
                    {officeImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentOfficeSlide(index)}
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          border: 'none',
                          backgroundColor: currentOfficeSlide === index ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                          cursor: 'pointer',
                          transition: 'backgroundColor 0.3s ease'
                        }}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentOfficeSlide((prev) => (prev - 1 + officeImages.length) % officeImages.length)}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255,255,255,0.4)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: 'var(--color-forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease, opacity 0.3s ease',
                      opacity: '0.7'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.6)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.4)';
                      e.target.style.opacity = '0.7';
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrentOfficeSlide((prev) => (prev + 1) % officeImages.length)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255,255,255,0.4)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: 'var(--color-forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease, opacity 0.3s ease',
                      opacity: '0.7'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.6)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.4)';
                      e.target.style.opacity = '0.7';
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
              <p style={{
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                Experience our welcoming space, designed specifically for children's comfort and success.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{
        backgroundColor: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100%',
        borderTop: '1px solid #f0f0f0'
      }}>
        <div className="container-content">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'var(--color-terracotta)'
          }}>
            Ready to Start Your Child's Journey?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: 'var(--color-forest-green)',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Contact us today to learn how we can support your child's development and celebrate their unique strengths.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" className="btn" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--color-terracotta)',
              color: 'white',
              fontWeight: '600',
              border: 'none'
            }}>
              Get Started Today
            </Link>
            <Link to="/services" className="btn" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: 'transparent',
              border: '2px solid var(--color-sage)',
              color: 'var(--color-sage)',
              fontWeight: '600'
            }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../usePageMeta';

function Career() {
  usePageMeta({
    title: 'Careers In ABA Therapy | NurtureNest Pediatric Therapy',
    description:
      'Explore ABA therapist and support roles at NurtureNest Pediatric Therapy and join our team serving children and families.'
  });
  const openPositions = [
    {
      title: 'Board Certified Behavior Analyst (BCBA)',
      type: 'Full-time/Part-time',
      location: 'In-clinic & In-home',
      description: 'Join our team as a BCBA to provide ABA therapy services and supervision to children with autism and developmental disabilities.',
      requirements: ['BCBA certification', '2+ years experience preferred', 'Valid driver\'s license', 'Passion for working with children']
    },
    {
      title: 'Registered Behavior Technician (RBT)',
      type: 'Full-time/Part-time',
      location: 'In-clinic & In-home',
      description: 'Implement ABA therapy programs under BCBA supervision, working directly with children and families.',
      requirements: ['High school diploma', 'RBT certification (or willing to obtain)', 'Reliable transportation', 'Patient and caring personality']
    }
  ];

  const benefits = [
    'Competitive salary and benefits package',
    'Professional development opportunities',
    'Continuing education support',
    'Flexible scheduling options',
    'Collaborative team environment',
    'Nature-inspired workspace',
    'Meaningful work making a difference'
  ];

  return (
    <div className="career-page" style={{ width: '100%' }}>
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
            Join Our Team
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Make a meaningful impact in children's lives while growing your career in a supportive, nature-inspired environment
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
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
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Why Work With Us?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'var(--color-forest-green)',
                opacity: '0.8',
                marginBottom: '2rem'
              }}>
                At NurtureNest, we believe that great therapy starts with great therapists. We're committed to creating an environment where our team can thrive professionally while making a real difference in children's lives.
              </p>
              
              {/* Team Photo */}
              <div style={{
                width: '100%',
                height: '300px',
                backgroundImage: 'url("/office/office5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
              }}></div>
            </div>
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '3rem',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }}>
              <h3 style={{
                color: 'var(--color-sage)',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                Our Benefits
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {benefits.map((benefit, index) => (
                  <li key={index} style={{
                    padding: '0.8rem 0',
                    position: 'relative',
                    paddingLeft: '2rem',
                    color: 'var(--color-forest-green)'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--color-sage)',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-cream)',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              color: 'var(--color-forest-green)',
              fontWeight: '600'
            }}>
              Current Opportunities
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-forest-green)',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join our growing team and help us expand our impact in the community
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {openPositions.map((position, index) => (
              <div key={index} className="card" style={{
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    color: 'var(--color-terracotta)',
                    marginBottom: '0.5rem',
                    fontSize: '1.6rem',
                    fontWeight: '600'
                  }}>
                    {position.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      backgroundColor: 'var(--color-sage)',
                      color: 'white',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {position.type}
                    </span>
                    <span style={{
                      backgroundColor: 'var(--color-dusty-blue)',
                      color: 'white',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {position.location}
                    </span>
                  </div>
                </div>
                
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  color: 'var(--color-forest-green)',
                  opacity: '0.8'
                }}>
                  {position.description}
                </p>
                
                <div>
                  <h4 style={{
                    color: 'var(--color-forest-green)',
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    Requirements:
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {position.requirements.map((req, i) => (
                      <li key={i} style={{
                        padding: '0.4rem 0',
                        position: 'relative',
                        paddingLeft: '2rem',
                        color: 'var(--color-forest-green)'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--color-sage)',
                          fontWeight: 'bold'
                        }}>
                          •
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '4rem',
            borderRadius: '16px',
            border: '2px solid var(--color-sage)'
          }}>
            <h2 style={{
              color: 'var(--color-terracotta)',
              marginBottom: '1.5rem',
              fontSize: '2.2rem'
            }}>
              Ready to Make a Difference?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2.5rem',
              color: 'var(--color-forest-green)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto'
            }}>
              We'd love to hear from you! Send us your resume and tell us why you're passionate about pediatric therapy.
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
                backgroundColor: 'var(--color-sage)',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px'
              }}>
                Apply Now
              </Link>
              <a href="mailto:info@nurturenestpc.com" className="btn" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'var(--color-terracotta)',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px'
              }}>
                Email Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;

import React from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const opportunities = [
    {
      title: 'ABA Therapy Student Placement',
      description: 'Gain hands-on experience in Applied Behavior Analysis under the supervision of our certified therapists.',
      requirements: ['Currently enrolled in relevant program', 'Background check required', 'Minimum 6-month commitment'],
      duration: '3-12 months'
    },
    {
      title: 'Speech Therapy Internship',
      description: 'Work alongside our speech-language pathologists to develop practical skills in pediatric speech therapy.',
      requirements: ['Speech therapy program enrollment', 'Academic good standing', 'Professional references'],
      duration: '1 semester'
    },
    {
      title: 'Occupational Therapy Fieldwork',
      description: 'Complete your fieldwork requirements while gaining valuable experience in pediatric occupational therapy.',
      requirements: ['OT program enrollment', 'Level II fieldwork eligibility', 'University approval'],
      duration: '12 weeks'
    },
    {
      title: 'Research Assistant Position',
      description: 'Assist with ongoing research projects and contribute to evidence-based practice development.',
      requirements: ['Graduate student status', 'Research experience preferred', 'Data analysis skills'],
      duration: 'Flexible'
    }
  ];

  return (
    <div className="students-page" style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-sage) 0%, var(--color-forest-green) 100%)',
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
            Student Opportunities
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Launch your career in pediatric therapy with hands-on experience and mentorship from our expert team
          </p>
        </div>
      </section>

      {/* Opportunities Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-white)',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{
              color: 'var(--color-forest-green)', 
              marginBottom: '1.5rem', 
              fontSize: '2.5rem',
              fontWeight: '600'
            }}>
              Build Your Future in Pediatric Therapy
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto',
              color: 'var(--color-forest-green)',
              opacity: '0.8'
            }}>
              At Nurture Nest Pediatric Therapy, we believe in nurturing the next generation of therapists. 
              Our student programs provide hands-on experience in a supportive, professional environment 
              where you can develop your skills while making a real difference in children's lives.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className="card" style={{
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <h3 style={{
                  color: 'var(--color-terracotta)', 
                  marginBottom: '1.5rem', 
                  fontSize: '1.6rem',
                  fontWeight: '600'
                }}>
                  {opportunity.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  color: 'var(--color-forest-green)',
                  opacity: '0.8'
                }}>
                  {opportunity.description}
                </p>
                
                <div style={{borderTop: '2px solid var(--color-terracotta)', paddingTop: '2rem'}}>
                  <div style={{marginBottom: '1rem', color: 'var(--color-forest-green)'}}>
                    <strong>Duration:</strong> {opportunity.duration}
                  </div>
                  
                  <div>
                    <strong style={{color: 'var(--color-forest-green)'}}>Requirements:</strong>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '2rem'}}>
                      {opportunity.requirements.map((req, i) => (
                        <li key={i} style={{marginBottom: '0.5rem', color: 'var(--color-forest-green)', opacity: '0.8'}}>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'white',
            padding: '4rem',
            borderRadius: '24px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}>
            <h2 style={{
              textAlign: 'center',
              color: 'var(--color-forest-green)',
              marginBottom: '3rem',
              fontSize: '2.2rem'
            }}>
              How to Apply
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--color-sage)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 2rem auto'
                }}>
                  1
                </div>
                <h4 style={{color: 'var(--color-forest-green)', marginBottom: '1rem'}}>Submit Application</h4>
                <p style={{color: 'var(--color-forest-green)', opacity: '0.8', lineHeight: '1.6'}}>
                  Complete our online application form with your academic information and experience.
                </p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--color-sage)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 2rem auto'
                }}>
                  2
                </div>
                <h4 style={{color: 'var(--color-forest-green)', marginBottom: '1rem'}}>Interview Process</h4>
                <p style={{color: 'var(--color-forest-green)', opacity: '0.8', lineHeight: '1.6'}}>
                  Participate in an interview with our clinical team to discuss your goals and interests.
                </p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--color-sage)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 2rem auto'
                }}>
                  3
                </div>
                <h4 style={{color: 'var(--color-forest-green)', marginBottom: '1rem'}}>Placement Confirmation</h4>
                <p style={{color: 'var(--color-forest-green)', opacity: '0.8', lineHeight: '1.6'}}>
                  Complete background checks and orientation to begin your placement with us.
                </p>
              </div>
            </div>
            
            <div style={{textAlign: 'center'}}>
              <Link to="/contact" className="btn btn-primary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Students;

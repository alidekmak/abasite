import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../usePageMeta';

function Services() {
  usePageMeta({
    title: 'ABA Therapy Services In Dearborn, MI | NurtureNest Pediatric Therapy',
    description:
      'Learn about our center-based and in-home ABA therapy services, plus parent training, for children in Dearborn and nearby communities.'
  });
  const services = [
    {
      name: 'Center Based ABA Services',
      description: 'At our thoughtfully designed center in Dearborn, Michigan, our skilled Behavior Technicians and Board-Certified Behavior Analysts deliver individualized ABA Therapy in a naturalistic yet structured environment. The center provides a safe space for children to develop and strengthen communication, social, and play skills, while also focusing on behavior reduction strategies tailored to each child\'s needs. Center-based services support peer interaction, group learning, and the generalization of skills beyond the home setting—helping children thrive across multiple environments.',
      benefits: ['Peer interaction opportunities', 'Group learning experiences', 'Skill generalization', 'Structured environment', 'BCBA supervision', 'Individualized programs'],
      icon: '/services/CenterBased ABA.png'
    },
    {
      name: 'In-Home ABA Services',
      description: 'Our dedicated Behavior Technicians and Board-Certified Behavior Analysts provide high-quality ABA Therapy in the comfort and familiarity of your home. This personalized approach allows children to work on meaningful goals in a natural, comfortable, and trusted environment—supporting skill development in communication, social interaction, daily routines, and behavior management. In-home therapy also promotes greater consistency and collaboration with caregivers, helping to create lasting, real-world progress.',
      benefits: ['Natural environment learning', 'Family collaboration', 'Comfortable setting', 'Real-world application', 'Caregiver involvement', 'Personalized approach'],
      icon: '/services/home.png'
    },
    {
      name: 'Parent Training',
      description: 'We offer parent training sessions led by a Board-Certified Behavior Analyst (BCBA), available both in-person and online. Our Parent Training Services are designed to empower families with the tools and knowledge to support their child\'s progress beyond therapy sessions. We focus on practical strategies for understanding behavior, building skills, and strengthening the parent-child connection. By learning how to implement ABA techniques at home and in the community, parents become confident partners in their child\'s growth and long-term success.',
      benefits: ['BCBA-led training', 'In-person and online options', 'Practical strategies', 'Home implementation', 'Parent empowerment', 'Ongoing support'],
      icon: '/services/parent-training.png'
    },
    {
      name: 'Community Outings',
      description: 'Our community outings offer fun, real-world learning experiences where children can practice important life skills in a supportive setting. Guided by our trained staff, these outings help children work on goals like waiting, following directions, transitioning between activities, and socializing with peers. At the same time, families have the opportunity to connect, share experiences, and enjoy time together in a welcoming environment that fosters both learning and community.',
      benefits: ['Real-world skill practice', 'Social interaction', 'Community integration', 'Family connection', 'Supervised learning', 'Fun experiences'],
      icon: '/services/community.png'
    },
    {
      name: 'Speech Therapy',
      description: 'Through our partnership with Simpli Speech, we offer on-site Speech Therapy services designed to help children strengthen their communication skills in a familiar and supportive environment. By working closely with Simpli Speech therapists, we ensure that each child\'s goals are aligned, and progress is made in speech, language, and social communication.',
      benefits: ['Partnership with Simpli Speech', 'On-site services', 'Communication development', 'Goal alignment', 'Familiar environment', 'Collaborative approach'],
      icon: '/services/simplespeech.png'
    },
    {
      name: 'Occupational Therapy',
      description: 'We\'ve partnered with Motivate Children\'s Therapy to bring on-site occupational therapy (OT) services directly to your child- right where they\'re most comfortable. Through a collaborative, goal-driven approach, we support your child\'s growth in daily living, feeding, fine motor skills, and sensory integration, all within a familiar environment that encourages real progress.',
      benefits: ['Partnership with Motivate Children\'s Therapy', 'On-site OT services', 'Daily living skills', 'Fine motor development', 'Sensory integration', 'Familiar setting'],
      icon: '/services/childrensmotivatetherapy.png'
    }
  ];

  return (
    <div className="services-page" style={{ width: '100%' }}>
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
            Comprehensive Services
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Evidence-based pediatric therapy services designed to help every child reach their full potential
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem', marginBottom: '4rem'}}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <img 
                    src={service.icon} 
                    alt={`${service.name} icon`}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'contain',
                      marginRight: '1rem'
                    }}
                  />
                  <h2 style={{
                    color: 'var(--color-forest-green)', 
                    fontSize: '2rem',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    {service.name}
                  </h2>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  color: 'var(--color-forest-green)',
                  opacity: '0.8'
                }}>
                  {service.description}
                </p>
                <div>
                  <h4 style={{
                    color: 'var(--color-terracotta)', 
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    Key Benefits:
                  </h4>
                  <ul style={{listStyle: 'none', paddingLeft: 0}}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} style={{
                        padding: '0.8rem 0',
                        position: 'relative',
                        paddingLeft: '2.5rem',
                        fontSize: '1rem',
                        color: 'var(--color-forest-green)'
                      }}>
                        <span style={{
                          position: 'absolute', 
                          left: 0,
                          color: 'var(--color-sage)',
                          fontSize: '1.2rem'
                        }}>
                          ✓
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories Image Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            margin: '4rem 0'
          }}>
            <div style={{
              width: '100%',
              height: '400px',
              backgroundImage: 'url("/thekids/thekids5.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }}></div>
            <div>
              <h3 style={{
                fontSize: '2.2rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Creating Success Stories Daily
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'var(--color-forest-green)',
                opacity: '0.8',
                marginBottom: '1.5rem'
              }}>
                Every child's journey is unique, and we're honored to be part of their growth story. Our evidence-based approaches combined with a nurturing environment create the perfect setting for meaningful progress.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--color-sage)',
                fontStyle: 'italic'
              }}>
                "The results speak for themselves - increased independence, improved communication, and most importantly, confident, happy children who are excited to learn and grow."
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '4rem',
            borderRadius: '16px',
            border: '2px solid var(--color-sage)',
            marginTop: '2rem'
          }}>
            <h2 style={{
              color: 'var(--color-terracotta)', 
              marginBottom: '1.5rem',
              fontSize: '2.2rem'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '1.2rem', 
              marginBottom: '2.5rem',
              color: 'var(--color-forest-green)',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 2.5rem auto'
            }}>
              Contact us today to learn more about our services and schedule a consultation for your child.
            </p>
            <Link to="/contact" className="btn" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--color-terracotta)',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '8px'
            }}>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

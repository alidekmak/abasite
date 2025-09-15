import React from 'react';
import { 
  HiHeart,
  HiChartBar,
  HiSparkles,
  HiUserGroup,
  HiAcademicCap,
  HiStar
} from 'react-icons/hi2';

function About() {
  const values = [
    {
      title: 'Compassionate Care',
      description: 'We approach every child and family with empathy, understanding, and genuine care for their unique journey.',
      icon: HiHeart
    },
    {
      title: 'Evidence-Based Practice',
      description: 'Our therapies are grounded in research and proven methodologies, ensuring the best outcomes for our clients.',
      icon: HiChartBar
    },
    {
      title: 'Nature-Inspired Environment',
      description: 'We believe healing happens best in spaces that feel natural, calming, and connected to the earth.',
      icon: HiSparkles
    },
    {
      title: 'Family-Centered Approach',
      description: 'We work collaboratively with families, recognizing parents and caregivers as essential partners in therapy.',
      icon: HiUserGroup
    },
    {
      title: 'Individual Growth',
      description: 'Every child is unique, and we tailor our approach to meet each individual\'s specific needs and strengths.',
      icon: HiAcademicCap
    },
    {
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professional practice and continue learning to better serve our community.',
      icon: HiStar
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Director & BCBA',
      bio: 'With over 10 years of experience in pediatric therapy, Dr. Johnson leads our clinical team with passion and expertise.',
      specialties: ['ABA Therapy', 'Autism Support', 'Behavioral Intervention']
    },
    {
      name: 'Maria Rodriguez',
      role: 'Speech-Language Pathologist',
      bio: 'Maria specializes in early childhood communication development and has been with Nurture Nest since our founding.',
      specialties: ['Early Communication', 'Language Development', 'Speech Therapy']
    },
    {
      name: 'James Chen',
      role: 'Occupational Therapist',
      bio: 'James brings creativity and innovation to occupational therapy, helping children develop essential life skills through play.',
      specialties: ['Sensory Processing', 'Fine Motor Skills', 'Daily Living Skills']
    },
    {
      name: 'Lisa Thompson',
      role: 'Administrative Director',
      bio: 'Lisa ensures our families receive exceptional support throughout their therapy journey with us.',
      specialties: ['Family Support', 'Care Coordination', 'Community Resources']
    }
  ];

  return (
    <div className="about-page" style={{ width: '100%' }}>
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
            About Nurture Nest
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Dedicated to nurturing each child's growth through compassionate, evidence-based pediatric therapy
          </p>
        </div>
      </section>

      {/* Our Story Section */}
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
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)',
                opacity: '0.8'
              }}>
                Nurture Nest Pediatric Therapy was founded with a simple but powerful belief: that children thrive best in environments that feel natural, safe, and welcoming. Our clinic was designed to be a place where therapy doesn't feel clinical, but rather like a warm, nurturing space where growth happens naturally.
              </p>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'var(--color-forest-green)',
                opacity: '0.8'
              }}>
                Since opening our doors, we've had the privilege of supporting hundreds of families on their unique journeys. Every child who walks through our doors teaches us something new about resilience, potential, and the power of individualized care.
              </p>
            </div>
            <div>
              {/* Therapy session image */}
              <div style={{
                width: '100%',
                height: '250px',
                backgroundImage: 'url("/thekids/thekids2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                marginBottom: '2rem'
              }}></div>
              
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: 'var(--color-forest-green)'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'var(--color-forest-green)',
                  fontStyle: 'italic'
                }}>
                  "To nurture each child's growth through compassionate, evidence-based pediatric therapy in a nature-inspired environment where families feel supported and children feel empowered to reach their full potential."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Core Values
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-forest-green)',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              These values guide everything we do and shape the care we provide
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {values.map((value, index) => (
              <div key={index} className="card" style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  <value.icon size={48} />
                </div>
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'var(--color-forest-green)',
                  lineHeight: '1.6',
                  opacity: '0.8'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Clinic Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-cream)',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              color: 'var(--color-forest-green)',
              fontWeight: '600'
            }}>
              Visit Our Clinic
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-forest-green)',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Our nature-inspired space is designed to feel welcoming and calming for children and families
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {['Family Lounge', 'Play Areas', 'Sensory Room', 'Classroom', 'Assessment Area'].map((area, index) => {
              // Custom photo mapping for each area
              const getOfficeImage = (index) => {
                if (index === 0) return '/office/office6.jpg'; // Family Lounge
                if (index === 1) return '/office/office4.jpg'; // Play Areas
                if (index === 2) return '/office/office3.jpg'; // Sensory Room
                if (index === 3) return '/office/office9.jpg'; // Classroom
                if (index === 4) return '/office/office11.png'; // Assessment Area
                return `/office/office${index + 1}.jpg`; // Fallback
              };
              
              return (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '3rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url("${getOfficeImage(index)}")`,
                  backgroundColor: 'transparent',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                </div>
                <h3 style={{
                  color: 'var(--color-forest-green)',
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {area}
                </h3>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

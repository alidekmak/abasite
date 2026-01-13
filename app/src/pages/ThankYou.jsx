import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../usePageMeta';

function ThankYou() {
  usePageMeta({
    title: 'Thank You | NurtureNest Pediatric Therapy',
    description:
      'Thank you for contacting NurtureNest Pediatric Therapy. We’ve received your message and will be in touch shortly.'
  });

  // Prevent thank-you page from being indexed
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="thank-you-page" style={{ width: '100%' }}>
      <section
        style={{
          padding: '100px 1rem',
          textAlign: 'center',
          backgroundColor: 'white'
        }}
      >
        <div className="container-content" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '2.75rem',
              marginBottom: '1.5rem',
              color: 'var(--color-forest-green)'
            }}
          >
            Thank You!
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              marginBottom: '2rem',
              color: 'var(--color-forest-green)',
              opacity: '0.85'
            }}
          >
            We’ve received your message and a member of our team will be in touch with you
            shortly. We look forward to connecting with you and supporting your child’s
            journey.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Link
              to="/"
              className="btn btn-primary"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              Return Home
            </Link>

            <Link
              to="/services"
              className="btn"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                border: '2px solid var(--color-sage)',
                color: 'var(--color-sage)',
                fontWeight: '600',
                backgroundColor: 'transparent'
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThankYou;

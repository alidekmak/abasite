import React from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../usePageMeta";

function DearbornHeights() {
  usePageMeta({
    title: "ABA Therapy In Dearborn Heights, MI | Play Based ABA | NurtureNest",
    description:
      "Play Based ABA Therapy, in-home and center-based ABA, plus parent training for families in Dearborn Heights, MI. Get started with NurtureNest today."
  });

  // Use existing images already on the server so nothing breaks.
  // You can swap these later if you add new images.
  const pageImages = [
    {
      src: "/thekids/thekids7.jpg",
      alt: "ABA Therapy In Dearborn Heights MI Using Play Based ABA Therapy"
    },
    {
      src: "/thekids/thekids9.jpg",
      alt: "Autism Therapy In Dearborn Heights MI With Supportive ABA Services"
    }
  ];

  const sections = [
    {
      title: "Play Based ABA Therapy In Dearborn Heights",
      text: [
        "At NurtureNest Pediatric Therapy, we provide ABA therapy for children and families in Dearborn Heights, MI with a warm, supportive approach that helps children learn meaningful skills in real-life settings.",
        "A key part of our approach is Play Based ABA Therapy. This means we use evidence-based ABA strategies inside child-led play, games, routines, and everyday interactions so learning feels natural, engaging, and easier to generalize to home and community life."
      ],
      bullets: [
        "Child-Led Play With Evidence-Based ABA Strategies",
        "Targets Communication, Social, And Daily Living Skills",
        "Helps Skills Transfer To Home, School, And Community",
        "Builds Motivation And Engagement During Sessions",
        "Supports Meaningful Progress Without A Rigid Feel"
      ]
    },
    {
      title: "ABA Services Available For Dearborn Heights Families",
      text: [
        "Every child’s plan is individualized. We focus on goals that matter most to your child and your family, and we track progress consistently so services stay aligned with your needs."
      ],
      bullets: [
        "Center Based ABA Therapy In A Structured Setting",
        "In-Home ABA Therapy When Appropriate For Your Child",
        "Play Based ABA Therapy To Support Engagement",
        "Parent Training And Coaching To Reinforce Skills",
        "Ongoing Progress Monitoring And Plan Adjustments"
      ]
    },
    {
      title: "What ABA Therapy Can Help With",
      text: [
        "Families in Dearborn Heights often seek ABA therapy support for communication development, social interaction, daily routines, transitions, and emotional regulation. Our goal is to help children build skills that support independence and confidence over time."
      ],
      bullets: [
        "Communication And Language Development",
        "Social Skills And Peer Interaction",
        "Daily Living Skills And Independence",
        "Routines, Transitions, And School Readiness",
        "Emotional Regulation And Coping Skills"
      ]
    }
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Hero Section (Matches Services Page Style) */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-sage), var(--color-forest-green))",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
          width: "100%"
        }}
      >
        <div className="container-content">
          <h1
            style={{
              fontSize: "3.2rem",
              marginBottom: "1.25rem",
              color: "white",
              fontWeight: "700"
            }}
          >
            ABA Therapy In Dearborn Heights, MI
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: "1.6",
              opacity: "0.95"
            }}
          >
            Play Based ABA Therapy, Center Based &amp; In-Home Services, Plus Parent
            Training For Families In Dearborn Heights
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "white",
          width: "100%"
        }}
      >
        <div className="container-content">
          {/* Image Row (Uses Existing Images To Avoid Uploads) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              marginBottom: "3.5rem",
              alignItems: "stretch"
            }}
          >
            {pageImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: "100%",
                  height: "320px",
                  backgroundImage: `url("${img.src}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
                }}
                role="img"
                aria-label={img.alt}
                title={img.alt}
              />
            ))}
          </div>

          {/* Cards (Matches Services Page Card Pattern) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
              gap: "3rem",
              marginBottom: "4rem"
            }}
          >
            {sections.map((block, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "3rem",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <h2
                  style={{
                    color: "var(--color-forest-green)",
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginTop: 0,
                    marginBottom: "1rem"
                  }}
                >
                  {block.title}
                </h2>

                {block.text.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      marginBottom: i === block.text.length - 1 ? "1.75rem" : "1rem",
                      color: "var(--color-forest-green)",
                      opacity: "0.8"
                    }}
                  >
                    {p}
                  </p>
                ))}

                <h4
                  style={{
                    color: "var(--color-terracotta)",
                    marginBottom: "1rem",
                    fontSize: "1.2rem",
                    fontWeight: "600"
                  }}
                >
                  Key Benefits:
                </h4>

                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                  {block.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        padding: "0.8rem 0",
                        position: "relative",
                        paddingLeft: "2.5rem",
                        fontSize: "1rem",
                        color: "var(--color-forest-green)"
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--color-sage)",
                          fontSize: "1.2rem"
                        }}
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Box (Matches Services Page CTA Style) */}
          <div
            style={{
              textAlign: "center",
              backgroundColor: "white",
              padding: "4rem",
              borderRadius: "16px",
              border: "2px solid var(--color-sage)",
              marginTop: "2rem"
            }}
          >
            <h2
              style={{
                color: "var(--color-terracotta)",
                marginBottom: "1.5rem",
                fontSize: "2.2rem"
              }}
            >
              Ready To Get Started In Dearborn Heights?
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "2.5rem",
                color: "var(--color-forest-green)",
                lineHeight: "1.6",
                maxWidth: "640px",
                margin: "0 auto 2.5rem auto"
              }}
            >
              Contact NurtureNest Pediatric Therapy to learn more about ABA therapy
              options and schedule a consultation.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                className="btn"
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  backgroundColor: "var(--color-terracotta)",
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "8px"
                }}
              >
                Contact Us
              </Link>

              <a
                href="tel:+13134299124"
                className="btn"
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  backgroundColor: "var(--color-sage)",
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "8px"
                }}
              >
                Call 313-429-9124
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DearbornHeights;

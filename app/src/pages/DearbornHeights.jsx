import React from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../usePageMeta";

function DearbornHeights() {
  usePageMeta({
    title: "ABA Therapy In Dearborn Heights, MI | Play Based ABA | NurtureNest",
    description:
      "Play Based ABA Therapy, in-home and center-based ABA, plus parent training for families in Dearborn Heights, MI. Get started with NurtureNest today."
  });

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
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-sage), var(--color-forest-green))",
          color: "white",
          padding: "80px 0",
          textAlign: "center"
        }}
      >
        <div className="container-content">
          <h1 style={{ fontSize: "3.2rem", fontWeight: "700", marginBottom: "1.25rem" }}>
            ABA Therapy In Dearborn Heights, MI
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "760px", margin: "0 auto" }}>
            Play Based ABA Therapy, Center Based & In-Home Services, Plus Parent Training
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 0", backgroundColor: "white" }}>
        <div className="container-content">
          {/* Image Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              marginBottom: "3.5rem"
            }}
          >
            {pageImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
                }}
              />
            ))}
          </div>

          {/* Content Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
              gap: "3rem",
              marginBottom: "4rem"
            }}
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "3rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
                }}
              >
                <h2 style={{ color: "var(--color-forest-green)", fontSize: "2rem" }}>
                  {section.title}
                </h2>

                {section.text.map((p, i) => (
                  <p key={i} style={{ fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.8 }}>
                    {p}
                  </p>
                ))}

                <h4 style={{ color: "var(--color-terracotta)", marginTop: "1.5rem" }}>
                  Key Benefits:
                </h4>

                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        padding: "0.6rem 0",
                        paddingLeft: "2rem",
                        position: "relative"
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--color-sage)"
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

          {/* CTA */}
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              border: "2px solid var(--color-sage)",
              borderRadius: "16px"
            }}
          >
            <h2 style={{ color: "var(--color-terracotta)", fontSize: "2.2rem" }}>
              Ready To Get Started In Dearborn Heights?
            </h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "640px", margin: "1.5rem auto" }}>
              Contact NurtureNest Pediatric Therapy to schedule a consultation.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                className="btn"
                style={{
                  padding: "1rem 2.5rem",
                  backgroundColor: "var(--color-terracotta)",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                Contact Us
              </Link>

              <a
                href="tel:+13134299124"
                className="btn"
                style={{
                  padding: "1rem 2.5rem",
                  backgroundColor: "var(--color-sage)",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none"
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

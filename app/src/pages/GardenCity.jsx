import React from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../usePageMeta";

function GardenCity() {
  usePageMeta({
    title: "ABA Therapy In Garden City, MI | Play Based ABA | NurtureNest",
    description:
      "Play Based ABA Therapy, in-home and center-based ABA services, plus parent training for families in Garden City, MI."
  });

  // Updated images to avoid repetition
  const pageImages = [
    {
      src: "/thekids/thekids2.jpg",
      alt: "ABA Therapy In Garden City MI Using Play Based ABA Therapy"
    },
    {
      src: "/thekids/thekids8.jpg",
      alt: "Autism Therapy In Garden City MI With Supportive ABA Services"
    }
  ];

  const sections = [
    {
      title: "Play Based ABA Therapy In Garden City",
      text: [
        "Families in Garden City, MI trust NurtureNest Pediatric Therapy for individualized ABA therapy that is compassionate, structured, and built around each child’s needs.",
        "Our Play Based ABA Therapy approach integrates evidence-based ABA strategies into child-led play, routines, and everyday interactions. This helps children stay motivated while learning skills that are easier to apply in real-world settings."
      ],
      bullets: [
        "Play-Based Learning With Evidence-Based ABA Strategies",
        "Supports Communication, Social Skills, And Daily Routines",
        "Encourages Engagement And Motivation",
        "Helps Skills Generalize To Home And Community",
        "Positive, Child-Centered Learning Environment"
      ]
    },
    {
      title: "ABA Services Available For Garden City Families",
      text: [
        "Every child’s program is individualized and guided by data and ongoing progress checks. Our team collaborates with families so goals stay aligned and meaningful."
      ],
      bullets: [
        "Center Based ABA Therapy",
        "In-Home ABA Therapy When Appropriate",
        "Play Based ABA Therapy",
        "Parent Training And Coaching",
        "Ongoing Progress Monitoring"
      ]
    },
    {
      title: "How ABA Therapy Can Help",
      text: [
        "ABA therapy supports children in building skills that improve daily life and long-term independence. Families in Garden City often seek support for communication, routines, social interaction, and emotional regulation."
      ],
      bullets: [
        "Communication And Language Development",
        "Social Skills And Peer Interaction",
        "Daily Living And Independence Skills",
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
            ABA Therapy In Garden City, MI
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
              Ready To Get Started In Garden City?
            </h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "640px", margin: "1.5rem auto" }}>
              Contact NurtureNest Pediatric Therapy to learn more and schedule a consultation.
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

export default GardenCity;

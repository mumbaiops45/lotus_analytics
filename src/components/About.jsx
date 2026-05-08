// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about-strip" id="about">
      <div className="about-inner">
        <div className="about-visual-grid reveal">
          <div className="about-img-card tall" style={{ height: 440 }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(160deg,#a8c5a0 0%,#4a7c5f 100%)',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
              }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.6 }}>
                <ellipse cx="50" cy="65" rx="18" ry="32" fill="white" />
                <ellipse cx="50" cy="65" rx="18" ry="32" fill="white" transform="rotate(40 50 65)" />
                <ellipse cx="50" cy="65" rx="18" ry="32" fill="white" transform="rotate(-40 50 65)" />
                <ellipse
                  cx="50"
                  cy="65"
                  rx="18"
                  ry="32"
                  fill="rgba(255,255,255,0.6)"
                  transform="rotate(80 50 65)"
                />
                <ellipse
                  cx="50"
                  cy="65"
                  rx="18"
                  ry="32"
                  fill="rgba(255,255,255,0.6)"
                  transform="rotate(-80 50 65)"
                />
                <circle cx="50" cy="60" r="12" fill="rgba(201,169,110,0.9)" />
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' }}>
                Your Growth Partner
              </p>
            </div>
            <div className="about-img-overlay">
              <span>Lotus Analytics</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="about-img-card" style={{ height: 200 }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg,#8faf9a 0%,#5a8070 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 48,
                      fontWeight: 700,
                      color: 'white',
                      lineHeight: 1,
                    }}
                  >
                    500<span style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>+</span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                      marginTop: 4,
                    }}
                  >
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
            <div className="about-img-card" style={{ height: 200 }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg,#c9a96e 0%,#8a6030 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 48,
                      fontWeight: 700,
                      color: 'white',
                      lineHeight: 1,
                    }}
                  >
                    15<span style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>yr</span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                      marginTop: 4,
                    }}
                  >
                    Of Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-eyebrow reveal">About Lotus Analytics</div>
          <h2 className="section-title reveal reveal-delay-1">
            A <em>single solution</em>
            <br />
            <strong>weaving all your</strong>
            <br />
            processes together
          </h2>
          <p className="section-body reveal reveal-delay-2">
            Lotus Analytics is your trusted "Essential Business Partner" — we handle the complexity so you can focus on
            growth. Like a spider weaving its web with precision and consistency, we connect every strand of your
            business operations seamlessly.
          </p>
          <p className="section-body reveal reveal-delay-2" style={{ marginBottom: 0 }}>
            From Finance and HR to CRM and Process Automation, our integrated platform — Centraverse™ — brings everything
            under one roof, giving you clarity, control, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
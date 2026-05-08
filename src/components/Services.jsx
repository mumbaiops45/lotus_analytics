// components/Services.jsx
import React, { useEffect, useRef } from 'react';

const servicesData = [
  {
    title: 'Logistics & Reverse Logistics Management',
    desc: 'End-to-end supply chain optimization, warehouse management, and reverse logistics for returns and recycling.',
    bgImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Custom Reporting',
    desc: 'Tailored dashboards and automated reports that give you the exact data you need, when you need it.',
    bgImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Payroll & Time Keeping',
    desc: 'Advanced payroll processing with compliance, plus intelligent time tracking solutions for modern workforces.',
    bgImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bookkeeping, Accounting & Finance',
    desc: 'Comprehensive financial management, real-time bookkeeping, tax preparation, and strategic finance.',
    bgImage:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Audit, Compliance & Reconciliation',
    desc: 'Fraud prevention, ID verification, compliance checks, and seamless reconciliation services.',
    bgImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Facial Recognition & Traffic Analysis',
    desc: 'AI-powered security solutions including facial recognition and intelligent traffic monitoring.',
    bgImage:
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Real Estate / Lease Management & Asset Tracking',
    desc: 'Manage properties, leases, and physical assets with real-time tracking and automated alerts.',
    bgImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ticketing & Escalation Management',
    desc: 'Streamlined support ticket systems with intelligent escalation rules for faster resolution.',
    bgImage:
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Communication Manager',
    desc: 'Unified messaging hub for SMS, email, voice calls, and internal memos – all in one place.',
    bgImage:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Learning Management System (LMS)',
    desc: 'Customized training platform with automated course assignments, quizzes, and progress tracking.',
    bgImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Automated Messaging Suite',
    desc: 'Schedule and trigger personalized text messages, emails, voice calls, and memos effortlessly.',
    bgImage:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sc-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #services {
          background: var(--cream, #f5f2ec);
        }

        /* HEADER */
        .sc-header {
          text-align: center;
          padding: 80px 24px 40px;
          position: relative;
          z-index: 10;
        }

        

        /* WRAPPER */
        .sc-wrapper {
          position: sticky;
          top: 80px;
          margin-bottom: 100px;
          z-index: 1;
        }

        /* CARD */
        .sc-card {
          max-width: 1200px;
          margin: 0 auto;
          background: #fff;
          border-radius: 36px;
          overflow: hidden;
          display: flex;
          min-height: 380px;

          box-shadow: 0 20px 60px rgba(0,0,0,0.10);

          opacity: 0;
          transform: scale(0.95) translateY(25px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .sc-card.sc-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          box-shadow: 0 30px 90px rgba(50,80,50,0.18);
        }

        /* IMAGE */
        .sc-image {
          flex: 1;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.6s ease;
        }

        .sc-card:hover .sc-image {
          transform: scale(1.05);
        }

        .sc-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(0,0,0,0.25), rgba(0,0,0,0.05));
        }

        /* CONTENT */
        .sc-content {
          flex: 1;
          padding: 42px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sc-number {
          font-size: 72px;
          font-weight: 700;
          color: #e9e5dc;
          margin-bottom: 10px;
        }

        .sc-title {
          font-size: 34px;
          font-weight: 600;
          margin-bottom: 18px;
          color: #1e2420;
        }

        .sc-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #6a6a66;
          max-width: 420px;
          margin-bottom: 25px;
        }

        .sc-link {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a6e4a;
          text-decoration: none;
        }

        .sc-link:hover {
          color: #b8860b;
        }

        /* SPACER */
        .sc-spacer {
          height: 120px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .sc-card {
            flex-direction: column;
          }

          .sc-image {
            min-height: 260px;
          }

          .sc-content {
            padding: 32px;
          }
        }

        @media (max-width: 768px) {
          .sc-title {
            font-size: 26px;
          }

          .sc-number {
            font-size: 48px;
          }

          .sc-stack {
            padding: 15vh 16px;
          }
        }
      `}</style>

      <section id="services">
        {/* HEADER */}
        <div className="sc-header">
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">
            Comprehensive <em>Business Solutions</em>
          </h2>
          <p className="section-body" style={{ maxWidth: 680, margin: '10px auto' }}>
            From logistics to AI systems — everything your enterprise needs in one place.
          </p>
        </div>

        {/* STACK */}
        <div className="sc-stack">
          {servicesData.map((service, idx) => (
            <div className="sc-wrapper" key={idx}>
              <div
                className="sc-card"
                ref={(el) => (cardRefs.current[idx] = el)}
              >
                <div
                  className="sc-image"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className="sc-image-overlay" />
                </div>

                <div className="sc-content">
                  <div className="sc-number">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <h3 className="sc-title">{service.title}</h3>

                  <p className="sc-desc">{service.desc}</p>

                  <a href="#contact" className="sc-link">
                    Explore Solution →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sc-spacer" />
      </section>
    </>
  );
};

export default Services;
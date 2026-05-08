// components/ServiceHighlights.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const highlights = [
  {
    id: "01",
    title: "Business Intelligence",
    desc: "Transform complex enterprise data into powerful real-time insights using AI dashboards, predictive forecasting and intelligent reporting systems.",
    accent: "#8FAF9A",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    tags: ["AI Analytics", "Forecasting", "Dashboards"],
  },
  {
    id: "02",
    title: "RPA & Automation",
    desc: "Automate workflows with scalable digital operations powered by intelligent AI agents, automation systems and enterprise integrations.",
    accent: "#C9A96E",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    tags: ["Automation", "AI Agents", "Workflow"],
  },
  {
    id: "03",
    title: "Accounting & Finance",
    desc: "Modern finance operations with intelligent bookkeeping, compliance systems, forecasting and enterprise financial visibility.",
    accent: "#6FAE9B",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tags: ["Reporting", "Compliance", "Finance"],
  },
];

export default function ServiceHighlights() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <>
      <style>{`
        .services-premium {
          position: relative;
          padding: 60px 0 90px; /* Reduced top padding from 100px to 60px */
          background: var(--cream, #F5F0E8);
          overflow: hidden;
        }

        .services-premium::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 70% at 80% 50%, rgba(143,175,154,0.12) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 40% at 10% 80%, rgba(201,169,110,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .services-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* New heading block – perfectly centered */
        .sc-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
          padding: 0 20px;
        }

        /* Eyebrow (ENTERPRISE SERVICES) – with lines */
        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--sage-dark, #5A8070);
          margin-bottom: 24px;
          font-weight: 600;
          white-space: nowrap;
        }

        .section-eyebrow::before,
        .section-eyebrow::after {
          content: "";
          width: 40px;
          height: 1.5px;
          background: var(--sage-dark, #5A8070);
        }

        /* Main title */
        .section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 350;
          line-height: 1.15;
          color: var(--charcoal, #1C1C1C);
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .section-title em {
          font-style: italic;
          color: var(--sage, #8FAF9A);
          font-weight: 600;
        }

        /* Subheading */
        .section-body {
          max-width: 680px;
          margin: 10px auto 0 !important;
          color: var(--text-muted, #6B7B72);
          line-height: 1.7;
          font-size: 17px;
          font-weight: 400;
        }

        /* slider & cards (unchanged) */
        .slider-wrap {
          overflow: hidden;
          width: 100%;
          padding-left: 20px;
        }

        .slider-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .service-card {
          position: relative;
          width: 520px;
          min-height: 420px;
          border-radius: 30px;
          overflow: hidden;
          background: #fff;
          flex-shrink: 0;
          box-shadow: 0 8px 30px rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.06);
          transition: all 0.5s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-image-wrap {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.08);
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1));
        }

        .service-number {
          position: absolute;
          top: 20px;
          left: 24px;
          font-size: 58px;
          font-family: "Cormorant Garamond", serif;
          color: rgba(255,255,255,0.25);
          z-index: 2;
        }

        .service-floating {
          position: absolute;
          left: 20px;
          bottom: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          z-index: 2;
        }

        .service-chip {
          padding: 8px 14px;
          border-radius: 999px;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .service-content {
          padding: 34px 32px;
          position: relative;
        }

        .service-small {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
          font-weight: 700;
        }

        .service-title-card {
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          line-height: 1;
          color: #1c1c1c;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .service-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #67736d;
          margin-bottom: 26px;
        }

        .service-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          border-radius: 999px;
          background: #111;
          color: white;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .service-btn:hover {
          gap: 18px;
          transform: translateY(-2px);
        }

        .service-btn span {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .services-premium {
            padding: 40px 0 60px; /* Even smaller top padding on mobile */
          }
          .sc-header {
            margin-bottom: 40px;
          }
          .section-title {
            font-size: 36px;
          }
          .section-body {
            font-size: 15px;
          }
          .service-card {
            width: 88vw;
            min-height: auto;
          }
          .service-image-wrap {
            height: 200px;
          }
          .service-content {
            padding: 26px 22px;
          }
          .service-title-card {
            font-size: 30px;
          }
          .service-desc {
            font-size: 13px;
          }
          .section-eyebrow {
            white-space: nowrap;
            gap: 10px;
          }
          .section-eyebrow::before,
          .section-eyebrow::after {
            width: 25px;
          }
        }
      `}</style>

      <section className="services-premium">
        <div className="services-container">
          <div className="sc-header">
            <div className="section-eyebrow"> Enterprise Services</div>
            <h2 className="section-title">
              Premium solutions for <em>modern enterprises</em>
            </h2>
            <p className="section-body" style={{ maxWidth: 680, margin: '10px auto' }}>
              Intelligent systems engineered for automation, scalability and enterprise transformation.
            </p>
          </div>

          <div className="slider-wrap">
            <motion.div className="slider-track" animate={controls}>
              {[...highlights, ...highlights].map((item, index) => (
                <div key={index} className="service-card" style={{ "--accent": item.accent }}>
                  <div className="service-image-wrap">
                    <img src={item.image} alt={item.title} className="service-image" />
                    <div className="service-overlay" />
                    <div className="service-number">{item.id}</div>
                    <div className="service-floating">
                      {item.tags.map((tag, i) => (
                        <div className="service-chip" key={i}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="service-content">
                    <div className="service-small">Premium Solution</div>
                    <h3 className="service-title-card">{item.title}</h3>
                    <p className="service-desc">{item.desc}</p>
                    <a href="#contact" className="service-btn">
                      Explore Service <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
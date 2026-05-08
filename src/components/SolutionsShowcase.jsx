import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SolutionsShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const solutionCards = [
    {
      number: "01",
      title: "Managed SaaS Operations",
      description:
        "Centralize tools, workflows, vendor coordination, and operational support into one dependable service layer.",
      tag: "Core Platform",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    },
    {
      number: "02",
      title: "Data Science & Analytics",
      description:
        "Turn raw data into dashboards, forecasts, KPI tracking, and smarter decision systems for growing teams.",
      tag: "AI & Insights",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    },
    {
      number: "03",
      title: "Finance & Back-Office Support",
      description:
        "Streamline reconciliations, reporting, admin processes, and cross-functional execution with structured delivery.",
      tag: "Operations",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
    },
    {
      number: "04",
      title: "Industry-Aligned Delivery",
      description:
        "Flexible support models tailored for wireless, e-commerce, healthcare, logistics, education, and more.",
      tag: "Vertical Solutions",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
    },
  ];

  const industries = [
    {
      name: "Wireless",
      desc: "Telecom infrastructure & optimization",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200",
    },
    {
      name: "E-Commerce",
      desc: "Order flow automation & analytics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    },
    {
      name: "Healthcare",
      desc: "Patient systems & compliance tracking",
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f0e1?w=1200",
    },
    {
      name: "Food Service",
      desc: "Supply chain & POS systems",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200",
    },
    {
      name: "Data Science",
      desc: "AI models & forecasting systems",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    },
    {
      name: "Education",
      desc: "LMS & analytics systems",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
    },
  ];

  return (
    <>
      <style>{`
        .section {
          background: #0b0f0d;
          padding: 40px 0;
          overflow: hidden;
        }

        .container {
          max-width: 1300px;
          margin: auto;
          padding: 0 28px;
        }

        /* HEADER */
        .head {
          text-align: center;
          margin-bottom: 60px;
        }

        .kicker {
          font-size: 11px;
          letter-spacing: 4px;
          color: #8FAF9A;
          text-transform: uppercase;
        }

        .title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px,5vw,58px);
          color: #fff;
        }

        .title span {
          color: #C9A96E;
          font-style: italic;
        }

        /* ===== CAROUSEL ===== */
        .slider {
          display: flex;
          width: max-content;
          animation: scroll 28s linear infinite;
          gap: 18px;
        }

        .slider:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .track {
          display: flex;
          gap: 18px;
        }

        /* ===== CARD ===== */
        .card {
          width: 320px;
          flex-shrink: 0;
          border-radius: 20px;
          overflow: hidden;

          /* DARK GLASS */
          background: rgba(15, 20, 18, 0.72);
          border: 1px solid rgba(143,175,154,0.25);

          backdrop-filter: blur(14px);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,169,110,0.4);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        /* IMAGE */
        .img {
          height: 170px;
          position: relative;
        }

        .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) saturate(1.2);
        }

        /* DARK OVERLAY ONLY */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.2),
            transparent
          );
        }

        /* CONTENT */
        .content {
          padding: 18px;
          color: #e8f0ec;
        }

        .num {
          font-size: 12px;
          color: #C9A96E;
          letter-spacing: 3px;
        }

        .tag {
          font-size: 11px;
          padding: 6px 10px;
          background: rgba(143,175,154,0.15);
          border-radius: 999px;
          color: #8FAF9A;
        }

        h3, h4 {
          margin: 10px 0;
          color: #ffffff;
        }

        p {
          font-size: 13px;
          color: rgba(232,240,236,0.75);
          line-height: 1.6;
        }

        /* INDUSTRY ROW */
        .block {
          margin-top: 70px;
        }
      `}</style>

      <section className="section" ref={sectionRef}>
        <div className="container">
          <div className="sc-header">
  <div className="section-eyebrow">Solutions Showcase</div>
  <h2 className="section-title">
    <span style={{ color: "#ffffff" }}>Unified Business</span> <em>Solutions</em>
  </h2>
</div>
          {/* ================= SOLUTIONS SLIDER ================= */}
          <div className="slider">
            <div className="track">
              {[...solutionCards, ...solutionCards].map((card, i) => (
                <div className="card" key={i}>
                  <div className="img">
                    <img src={card.image} alt={card.title} />
                    <div className="overlay" />
                  </div>

                  <div className="content">
                    <div className="num">{card.number}</div>
                    <div className="tag">{card.tag}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= INDUSTRIES SLIDER ================= */}
          <div className="slider block">
            <div className="track">
              {[...industries, ...industries].map((item, i) => (
                <div className="card" key={i}>
                  <div className="img">
                    <img src={item.image} alt={item.name} />
                    <div className="overlay" />
                  </div>

                  <div className="content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SolutionsShowcase;
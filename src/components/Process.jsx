// components/FeatureSections.jsx
import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    tag: "Business Intelligence",
    title: "Smart Analytics For Enterprise Growth",
    desc:
      "AI dashboards, forecasting and real-time insights that help you make faster business decisions.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    items: ["Dashboards", "AI", "KPIs", "Reports"],
  },
  {
    tag: "RPA Automation",
    title: "Build Your Digital Workforce",
    desc:
      "Automate repetitive tasks with intelligent bots and workflow systems.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    items: ["Bots", "Automation", "Workflow", "AI Tasks"],
  },
  {
    tag: "Finance",
    title: "Finance That Drives Growth",
    desc:
      "Real-time accounting, forecasting, compliance tracking and financial reporting.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    items: ["Accounting", "Tax", "Reports", "Forecast"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function FeatureSections() {
  return (
    <>
      <style>{`
        :root {
          --primery: #1f7a6c;
          --bg: #070d12;
          --text: #9aa4af;
        }

        /* BACKGROUND */
        .wrap {
          padding: 110px 6%;
          background: radial-gradient(circle at top, #0f1a22, var(--bg));
          position: relative;
          overflow: hidden;
        }

        /* glow blobs */
        .wrap::before,
        .wrap::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
        }

        .wrap::before {
          background: var(--primery);
          top: -120px;
          left: -120px;
        }

        .wrap::after {
          background: #5a7cff;
          bottom: -120px;
          right: -120px;
        }

        /* HEADER */
        .header {
          text-align: center;
          margin-bottom: 70px;
          position: relative;
          z-index: 2;
        }

        .header h2 {
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -1px;
        }

        .header span {
          color: var(--primery);
          position: relative;
        }

        .header span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 3px;
          background: var(--primery);
          border-radius: 10px;
          opacity: 0.6;
        }

        .header p {
          font-size: 16px;
          color: var(--text);
          max-width: 720px;
          margin: 14px auto 0;
          line-height: 1.7;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        /* CARD */
        .card {
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          transition: all 0.4s ease;
          position: relative;
        }

        .card:hover {
          transform: translateY(-12px);
          border-color: rgba(31, 122, 108, 0.6);
          box-shadow:
            0 25px 80px rgba(31, 122, 108, 0.25),
            inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        /* IMAGE */
        .imgBox {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .imgBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .card:hover img {
          transform: scale(1.12);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 13, 18, 0.95),
            rgba(7, 13, 18, 0.2)
          );
        }

        /* CONTENT */
        .content {
          padding: 24px 22px 28px;
        }

        .tag {
          font-size: 11px;
          letter-spacing: 2.2px;
          text-transform: uppercase;
          color: var(--primery);
          margin-bottom: 10px;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .desc {
          font-size: 14px;
          color: var(--text);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        /* CHIPS */
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
          font-size: 11px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(31, 122, 108, 0.12);
          color: #cfeee8;
          border: 1px solid rgba(31, 122, 108, 0.25);
          transition: 0.3s ease;
        }

        .chip:hover {
          background: rgba(31, 122, 108, 0.25);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="wrap">
        {/* HEADER */}
        <div className="header">
          <h2>
            Build Your <span>Digital Ecosystem</span>
          </h2>
          <p>
            Enterprise-grade automation, intelligence and financial systems built for modern scalability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              className="card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="imgBox">
                <img src={s.img} alt={s.title} />
                <div className="overlay" />
              </div>

              <div className="content">
                <div className="tag">{s.tag}</div>
                <div className="title">{s.title}</div>
                <div className="desc">{s.desc}</div>

                <div className="chips">
                  {s.items.map((x, j) => (
                    <span key={j} className="chip">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
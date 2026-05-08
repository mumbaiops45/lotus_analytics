// components/Evolution.jsx
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2011",
    items: ["HR Support", "Corporate Consultation Services", "Reel Time"],
  },
  {
    year: "2012",
    items: ["HR Support", "Corporate Consultation Services", "Reel Time"],
  },
  {
    year: "2013",
    items: ["Security Monitoring Compliance", "Calling Solutions"],
  },
  {
    year: "2014",
    items: [
      "RealTime - Compliance / Task Management",
      "Financial Offerings",
      "Software Development Wing",
      "Due Diligence Services",
    ],
  },
  {
    year: "2015",
    items: ["Business Intelligence", "Supply Chain Management", "Loss Prevention"],
  },
  {
    year: "2016",
    items: ["Fraud Prevention", "Inventory Solutions"],
  },
  {
    year: "2017",
    items: ["Facial Recognition", "Tax Compliance", "SAAS Offerings"],
  },
  {
    year: "2018",
    items: ["Drones", "RPA", "Customer Tools", "Healthcare Solutions"],
  },
  {
    year: "2019",
    items: ["Centraverse", "Time Clock", "Real Estate Tracking"],
  },
  {
    year: "2020",
    items: ["QRCodes", "Automation Tools", "Healthcare Systems"],
  },
  {
    year: "2021",
    items: ["Payroll Services", "HR End-to-End", "AI Document Capture"],
  },
];

const YearCard = ({ year, items, isOpen, onClick, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="year-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="year-card-header">
        <span className="year-number">{year}</span>
        <span className="year-icon">{isOpen ? "−" : "+"}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="year-card-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Evolution = () => {
  const headerRef = useRef(null);
  // const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <style>{`
        .evolution-section {
          position: relative;
          background: var(--cream, #F5F0E8);
          padding: 40px 0 90px;   /* Reduced top padding from 90px to 60px */
          overflow: hidden;
        }

        .evolution-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(90,128,112,0.10), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(143,175,154,0.10), transparent 55%);
          pointer-events: none;
        }

        .evolution-container {
          max-width: 1300px;
          margin: auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* HEADER - modern, centered, matching ServiceHighlights */
        .evolution-head {
          text-align: center;
          margin-bottom: 55px;
        }

        .sc-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

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

        .section-body {
          max-width: 680px;
          margin: 10px auto 0 !important;
          color: var(--text-muted, #6B7B72);
          line-height: 1.7;
          font-size: 17px;
          font-weight: 400;
        }

        /* GRID */
        .evolution-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 22px;
        }

        /* CARD */
        .year-card {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(143,175,154,0.25);
          border-radius: 18px;
          padding: 18px 22px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }

        .year-card:hover {
          transform: translateY(-6px);
          border-color: rgba(143,175,154,0.5);
          box-shadow: 0 18px 40px rgba(90,128,112,0.15);
        }

        .year-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .year-number {
          font-size: 30px;
          font-weight: 700;
          color: #1a1a1a;  /* CHANGED TO BLACK (was gold) */
        }

        .year-icon {
          font-size: 22px;
          color: var(--sage-dark);
        }

        .year-card-content {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(143,175,154,0.25);
        }

        .year-card-content li {
          font-size: 13px;
          color: #6B7B72;
          padding: 6px 0;
          padding-left: 16px;
          position: relative;
        }

        .year-card-content li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--sage);
        }

        @media (max-width: 768px) {
          .evolution-section {
            padding: 40px 0 60px; /* Even smaller top padding on mobile */
          }
          .evolution-container {
            padding: 0 20px;
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

      <section className="evolution-section">
        <div className="evolution-container">
          <div className="evolution-head">
            <div className="sc-header">
              <div className="section-eyebrow">Our Journey</div>
              <h2 className="section-title">
                Evolution Is In <em>Our DNA</em>
              </h2>
              <p className="section-body">
                Intelligent systems engineered for automation, scalability and enterprise transformation.
              </p>
            </div>
          </div>

          <div className="evolution-grid">
            {timelineData.map((item, index) => (
              <YearCard
                key={item.year}
                year={item.year}
                items={item.items}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Evolution;
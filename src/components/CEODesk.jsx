// components/CEODesk.jsx
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CEODesk = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <style>{`
        .ceo-section {
          position: relative;
          background: #070707;
          overflow: hidden;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .ceo-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          opacity: 0.35;
        }

        .ceo-section::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          background: radial-gradient(
            ellipse 80% 100% at 90% 50%,
            rgba(201, 169, 110, 0.08) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
        }

        .ceo-top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--gold, #c9a96e) 30%,
            var(--gold, #c9a96e) 70%,
            transparent 100%
          );
          z-index: 2;
        }

        .ceo-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 4vw;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          min-height: 90vh;
          align-items: center;
          gap: 40px;
        }

        .ceo-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 50px 90px 0;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .ceo-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 4.5vw, 64px);
          font-weight: 700;
          color: #ffffff;
          line-height: 0.95;
          margin-bottom: 34px;
          text-transform: uppercase;
        }

        .ceo-quote-text {
          font-size: 14px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.65);
          font-style: italic;
        }

        .ceo-author-name {
          font-size: 20px;
          color: var(--gold, #c9a96e);
        }

        .ceo-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }

        .ceo-portrait {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 82%;
          height: 82%;
          transform: translate(-50%, -50%);
          border-radius: 26px;
          background:
            linear-gradient(to right, rgba(7,7,7,0.7), transparent),
            url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&fit=crop&crop=face")
            center / cover no-repeat;
          filter: grayscale(100%) contrast(1.05) brightness(0.72);
        }

        .ceo-stat-float {
          position: absolute;
          top: 50px;
          right: 30px;
          background: rgba(0,0,0,0.5);
          padding: 16px 20px;
          border-radius: 14px;
          color: #fff;
        }
      `}</style>

      <section className="ceo-section" ref={sectionRef}>
        <div className="ceo-inner">

          {/* LEFT */}
          <motion.div
            className="ceo-left"
            initial="hidden"
            animate={controls}
          >
            <h2 className="ceo-heading">
              From CEO's Desk
            </h2>

            <p className="ceo-quote-text">
              Technology is always expensive is a myth, and we make it affordable through cloud-based solutions.
            </p>

            <div className="ceo-author-name">
              Ash Anand
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="ceo-right">
            <div className="ceo-portrait" />

            <div className="ceo-stat-float">
              ₹50Cr+ Revenue Unlocked
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default CEODesk;
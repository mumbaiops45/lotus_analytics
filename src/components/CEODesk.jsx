// components/CEODesk.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CEODesk = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [countDone, setCountDone] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setCountDone(true);
    }
  }, [isInView, controls]);

  return (
    <>
      <style>{`
        .ceo-section {
          position: relative;
          background: #070707;  /* matches ServiceHighlights dark background */
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

        /* LEFT */
        .ceo-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 50px 90px 0;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .ceo-left::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 20%;
          bottom: 20%;
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--gold, #c9a96e),
            transparent
          );
          opacity: 0.4;
        }

        .ceo-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .ceo-eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--sage, #8FAF9A);
          opacity: 0.7;
        }

        .ceo-eyebrow-text {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--sage-light, #B5CFC0);
        }

        .ceo-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 4.5vw, 64px);
          font-weight: 700;
          color: #ffffff;
          line-height: 0.95;
          letter-spacing: -1px;
          margin-bottom: 34px;
          text-transform: uppercase;
        }

        .ceo-heading .desk {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
          font-style: italic;
          font-size: 0.82em;
        }

        .ceo-quote-wrap {
          position: relative;
          padding-left: 24px;
          margin-bottom: 28px;
        }

        .ceo-quote-mark {
          position: absolute;
          left: 0;
          top: -8px;
          font-size: 56px;
          line-height: 1;
          color: var(--gold, #c9a96e);
          opacity: 0.35;
        }

        .ceo-quote-text {
          font-size: 14px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.65);
          font-style: italic;
        }

        .ceo-quote-text em {
          font-style: normal;
          color: var(--sage-light, #B5CFC0);
          font-weight: 500;
        }

        .ceo-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ceo-author-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--gold, #c9a96e);
          letter-spacing: 1px;
        }

        .ceo-author-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
        }

        .ceo-signature {
          margin-top: 14px;
          opacity: 0.65;
          width: 100px;
        }

        /* VALUES */
        .ceo-values {
          margin-top: 40px;
          display: flex;
          gap: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding-top: 24px;
        }

        .ceo-value-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ceo-value-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--sage-light, #B5CFC0);
          line-height: 1;
        }

        .ceo-value-lbl {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
        }

        /* RIGHT */
        .ceo-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          min-height: 650px;
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
            linear-gradient(
              to right,
              rgba(7,7,7,0.7) 0%,
              transparent 30%
            ),
            linear-gradient(
              to top,
              rgba(7,7,7,0.7) 0%,
              transparent 30%
            ),
            url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&fit=crop&crop=face")
            center / cover no-repeat;
          filter: grayscale(100%) contrast(1.05) brightness(0.72);
          transition: transform 8s ease-in-out;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }

        .ceo-right:hover .ceo-portrait {
          transform: translate(-50%, -50%) scale(1.03);
        }

        .ceo-portrait.animated {
          animation: kenBurns 12s ease-in-out infinite alternate;
        }

        @keyframes kenBurns {
          from {
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            transform: translate(-50%, -50%) scale(1.04) translateX(-6px);
          }
        }

        .ceo-nameplate {
          position: relative;
          z-index: 4;
          width: 100%;
          padding: 28px;
          background: linear-gradient(
            to top,
            rgba(7, 7, 7, 0.96) 60%,
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          min-height: 130px;
        }

        .ceo-nameplate-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .ceo-nameplate-role {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--sage-light, #B5CFC0);
        }

        .ceo-stat-float {
          position: absolute;
          top: 50px;
          right: 30px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 16px 20px;
          z-index: 5;
          text-align: center;
          animation: ceoStatFloat 4s ease-in-out infinite;
        }

        @keyframes ceoStatFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .ceo-stat-val {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold, #c9a96e);
          line-height: 1;
          display: block;
          margin-bottom: 4px;
        }

        .ceo-stat-lbl {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        /* MOBILE */
        @media (max-width: 1024px) {
          .ceo-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .ceo-left {
            padding: 70px 0 50px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .ceo-right {
            min-height: 520px;
          }
          .ceo-portrait {
            width: 88%;
            height: 88%;
          }
          .ceo-heading {
            font-size: 46px;
          }
        }

        @media (max-width: 640px) {
          .ceo-section {
            min-height: auto;
          }
          .ceo-left {
            padding: 60px 0 40px;
          }
          .ceo-heading {
            font-size: 34px;
            margin-bottom: 24px;
          }
          .ceo-quote-text {
            font-size: 13px;
            line-height: 1.8;
          }
          .ceo-values {
            flex-wrap: wrap;
            gap: 18px;
          }
          .ceo-right {
            min-height: 400px;
          }
          .ceo-portrait {
            width: 92%;
            height: 92%;
            border-radius: 20px;
          }
          .ceo-stat-float {
            display: none;
          }
          .ceo-nameplate {
            padding: 20px;
            min-height: 90px;
          }
          .ceo-nameplate-name {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="ceo-section" id="ceo-desk" ref={sectionRef}>
        <div className="ceo-top-rule" />

        <div className="ceo-inner">
          {/* LEFT */}
          <motion.div
            className="ceo-left"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              className="ceo-eyebrow"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7 },
                },
              }}
            >
              <span className="ceo-eyebrow-line" />
              <span className="ceo-eyebrow-text">
                Leadership Vision
              </span>
            </motion.div>

            <motion.h2
              className="ceo-heading"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9 },
                },
              }}
            >
              From
              <br />
              CEO's
              <span className="desk">Desk</span>
            </motion.h2>

            <motion.div
              className="ceo-quote-wrap"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9 },
                },
              }}
            >
              <span className="ceo-quote-mark">"</span>

              <p className="ceo-quote-text">
                <em>Technology is always expensive</em> is a myth,
                and we at Lotus strive to make technology affordable
                every day. Lotus Analytics creates expert consulting
                solutions using <em>cloud-based custom software</em>{" "}
                that allows businesses to dream of the future while
                we solve the problems of today and tomorrow.
              </p>
            </motion.div>

            <motion.div
              className="ceo-author"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7 },
                },
              }}
            >
              <span className="ceo-author-name">Ash Anand</span>

              <span className="ceo-author-title">
                Founder & CEO, Lotus Analytics
              </span>

              <svg
                className="ceo-signature"
                width="120"
                height="40"
                viewBox="0 0 120 40"
                fill="none"
              >
                <path
                  d="M8 28 C 20 10, 30 35, 45 18 C 55 8, 60 32, 72 20 C 82 10, 90 30, 112 22"
                  stroke="var(--gold, #c9a96e)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="200"
                  strokeDashoffset={isInView ? "0" : "200"}
                  style={{
                    transition:
                      "stroke-dashoffset 1.8s ease 0.8s",
                  }}
                />
              </svg>
            </motion.div>

            <motion.div className="ceo-values">
              {[
                { num: "500+", lbl: "Clients Served" },
                { num: "15yr", lbl: "Experience" },
                { num: "99%", lbl: "Retention" },
              ].map((v, i) => (
                <div className="ceo-value-item" key={i}>
                  <span className="ceo-value-num">{v.num}</span>
                  <span className="ceo-value-lbl">{v.lbl}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="ceo-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div
              className={`ceo-portrait ${
                isInView ? "animated" : ""
              }`}
            />

            <motion.div
              className="ceo-stat-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="ceo-stat-val">₹50Cr+</span>
              <span className="ceo-stat-lbl">
                Revenue Unlocked
              </span>
            </motion.div>

            <div className="ceo-nameplate">
              <div>
                <div className="ceo-nameplate-name">
                  Ash Anand
                </div>

                <div className="ceo-nameplate-role">
                  Founder & CEO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CEODesk;
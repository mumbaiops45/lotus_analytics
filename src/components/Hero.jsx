// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const bars = [45, 70, 55, 90, 65, 110, 95];

  return (
    <section className="hero relative overflow-hidden" id="home">
      <div className="hero-bg" />

      {/* Animated Lotus Background */}
      <motion.svg
        className="hero-lotus-bg"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
        animate={{
          rotate: 360,
          scale: 1,
          opacity: 0.12,
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          },
          opacity: {
            duration: 1.5,
          },
        }}
      >
        <ellipse cx="200" cy="250" rx="60" ry="120" fill="#8FAF9A" />
        <ellipse
          cx="200"
          cy="250"
          rx="60"
          ry="120"
          fill="#8FAF9A"
          transform="rotate(40 200 250)"
        />
        <ellipse
          cx="200"
          cy="250"
          rx="60"
          ry="120"
          fill="#8FAF9A"
          transform="rotate(-40 200 250)"
        />
        <ellipse
          cx="200"
          cy="250"
          rx="60"
          ry="120"
          fill="#5A8070"
          transform="rotate(80 200 250)"
        />
        <ellipse
          cx="200"
          cy="250"
          rx="60"
          ry="120"
          fill="#5A8070"
          transform="rotate(-80 200 250)"
        />
        <ellipse
          cx="200"
          cy="250"
          rx="60"
          ry="120"
          fill="#3d6655"
          transform="rotate(120 200 250)"
        />
        <circle cx="200" cy="240" r="40" fill="#C9A96E" />
      </motion.svg>

      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero-label-line" />
            Your Essential Business Partner
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <em>Weaving</em> every
            <br />
            business process
            <br />
            <strong>together.</strong>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            From Finance to HR, CRM to Accountability Systems — Lotus
            Analytics connects and automates your entire business ecosystem,
            consistently.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#services"
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="play-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2l8 5-8 5V2z" fill="currentColor" />
                </svg>
              </div>
              Contact Sales
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* FLOAT CARD TOP */}
          <motion.div
            className="hero-card-float"
            style={{ top: "-30px", right: "-20px" ,zIndex: 10}}
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <div className="float-icon">📈</div>
            <div className="float-label">Revenue</div>
            <div className="float-val">+34%</div>
          </motion.div>

          {/* MAIN CARD */}
          <motion.div
            className="hero-card-main"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-label">Business Performance</div>

            <motion.div
              className="card-metric"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              ₹ 2.4<span>Cr</span>
            </motion.div>

            <div className="card-sub">
              Avg. revenue impact per client this quarter
            </div>

            {/* Animated Bars */}
            <div className="chart-bars">
              {bars.map((height, i) => (
                <motion.div
                  key={i}
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{
                    delay: 1 + i * 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8
              }}
            >
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                Jan
              </span>
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                Mar
              </span>
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                May
              </span>
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                Jul
              </span>
            </div>
          </motion.div>

          {/* FLOAT CARD BOTTOM */}
          <motion.div
            className="hero-card-float"
            style={{ bottom: "-90px", left: "-80px",zIndex: 5 }}
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <div className="float-icon">✅</div>
            <div className="float-label">Processes Automated</div>
            <div className="float-val">1,280</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
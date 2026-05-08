// components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

const CTA = () => (
  <>
    <style>{`
      .cta-section {
        position: relative;
        padding: 120px 5vw;
        background: linear-gradient(
          180deg,
          var(--cream) 0%,
          var(--cream-dark) 100%
        );
        overflow: hidden;
        text-align: center;
      }

      /* soft ambient background */
      .cta-section::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 20% 30%, rgba(143,175,154,0.18), transparent 55%),
          radial-gradient(circle at 80% 60%, rgba(201,169,110,0.12), transparent 60%);
        pointer-events: none;
      }

      .cta-inner {
        position: relative;
        z-index: 2;
        max-width: 760px;
        margin: 0 auto;
      }

      /* badge */
      .cta-eyebrow {
        font-size: 11px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--sage-dark);
        font-weight: 600;
        margin-bottom: 18px;
        display: inline-block;
      }

      /* heading */
      .cta-title {
        font-size: clamp(40px, 5vw, 64px);
        font-family: "Cormorant Garamond", serif;
        font-weight: 400;
        color: #000000; /* BLACK HEADING */
        line-height: 1.1;
        margin-bottom: 20px;
      }

      .cta-title em {
        color: var(--sage);
        font-style: italic;
      }

      /* description */
      .cta-desc {
        font-size: 17px;
        line-height: 1.8;
        color: var(--text-muted);
        max-width: 580px;
        margin: 0 auto 40px;
      }

      /* buttons */
      .cta-actions {
        display: flex;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
        margin-bottom: 50px;
      }

      .btn-primary {
        background: var(--sage-dark);
        color: white;
        padding: 16px 34px;
        border-radius: 14px;
        font-size: 13px;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.3s ease;
        border: 1px solid transparent;
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        background: var(--sage);
      }

      .btn-secondary {
        background: rgba(255,255,255,0.6);
        border: 1px solid rgba(143,175,154,0.3);
        color: var(--charcoal);
        padding: 16px 34px;
        border-radius: 14px;
        font-size: 13px;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .btn-secondary:hover {
        transform: translateY(-3px);
        border-color: var(--sage);
      }

      /* trust row */
      .cta-trust {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 18px;
      }

      .cta-trust-item {
        font-size: 13px;
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .cta-trust-item svg {
        stroke: var(--sage);
      }

      /* footer */
      .site-footer {
        margin-top: 80px;
        padding-top: 30px;
        border-top: 1px solid rgba(143,175,154,0.25);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 13px;
        color: var(--text-muted);
      }

      .footer-links {
        display: flex;
        gap: 18px;
      }

      .footer-links a {
        color: var(--text-muted);
        transition: 0.3s;
      }

      .footer-links a:hover {
        color: var(--sage-dark);
      }

      @media(max-width:600px){
        .cta-actions {
          flex-direction: column;
        }

        .btn-primary,
        .btn-secondary {
          width: 100%;
        }

        .site-footer {
          flex-direction: column;
          text-align: center;
        }

        .footer-links {
          justify-content: center;
        }
      }
    `}</style>

    <section className="cta-section">
      <div className="cta-inner">

        <motion.span
          className="cta-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Transform
        </motion.span>

        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let’s build something <em>extraordinary</em>
        </motion.h2>

        <motion.p
          className="cta-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We simplify operations, automate workflows, and connect your entire
          business ecosystem into one powerful system.
        </motion.p>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </motion.div>

        <div className="cta-trust">
          {["24/7 Support", "Enterprise Ready", "Secure Systems", "Scalable Platform"].map((t, i) => (
            <div className="cta-trust-item" key={i}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" strokeWidth="1.5" />
              </svg>
              {t}
            </div>
          ))}
        </div>

      </div>

      
    </section>
  </>
);

export default CTA;
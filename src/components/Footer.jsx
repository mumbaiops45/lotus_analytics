import React, { useEffect, useState } from "react";
import {
  HiArrowUp,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        footer {
          background: #F5F2EB;
          padding: 80px 5vw 30px;
          color: #1e1e1c;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        .footer-inner {
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 50px;
        }

        .brand-column {
          max-width: 360px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
        }

        .brand-logo {
          height: 46px;
          width: auto;
        }

        .contact-details {
          font-size: 14px;
          line-height: 1.8;
          color: #444;
          margin-top: 10px;
        }

        .contact-box p {
          margin: 0 0 16px 0;
        }

        .contact-label {
          font-weight: 700;
          color: #111;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .contact-label svg {
          color: #5A8070;
          font-size: 17px;
        }

        .contact-value {
          color: #444;
          display: block;
          padding-left: 25px;
        }

        .email-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 25px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .email-social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(90,128,112,0.1);
          color: #5A8070;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .email-social-icon:hover {
          background: #5A8070;
          color: #fff;
          transform: translateY(-3px);
        }

        .col-title {
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: #1a2c26;
          font-weight: 700;
          position: relative;
        }

        .col-title::after {
          content: "";
          display: block;
          width: 35px;
          height: 2px;
          background: #5A8070;
          margin-top: 8px;
          border-radius: 2px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 10px;
          font-size: 14px;
          color: #444;
          cursor: pointer;
          position: relative;
          width: fit-content;
          transition: 0.25s ease;
        }

        .link-list li::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background: #5A8070;
          transition: 0.3s ease;
        }

        .link-list li:hover {
          color: #1a2c26;
        }

        .link-list li:hover::after {
          width: 100%;
        }

        .contact-sales-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
          padding: 12px 26px;
          border-radius: 50px;
          background: #5A8070;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          text-decoration: none;
          transition: 0.3s ease;
          box-shadow: 0 6px 18px rgba(90,128,112,0.2);
          cursor: pointer;
          border: none;
        }

        .contact-sales-btn:hover {
          background: transparent;
          color: #5A8070;
          border: 1px solid #5A8070;
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 25px;
          border-top: 1px solid rgba(0,0,0,0.08);
          flex-wrap: wrap;
        }

        .footer-left {
          font-size: 12px;
          font-weight: 700;
          color: #1e1e1c;
        }

        .footer-center {
          font-size: 12px;
          color: #666;
          text-align: center;
          font-weight: 500;
        }

        .footer-center span {
          color: #5A8070;
          font-weight: 700;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-legal a {
          color: #1e1e1c;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition: 0.25s ease;
        }

        .footer-legal a:hover {
          color: #5A8070;
        }

        /* SCROLL BUTTON */

        .scroll-top-btn {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: none;
          background: #5A8070;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 10px 30px rgba(90,128,112,0.35);
          transition: all 0.3s ease;
          animation: floatBtn 2.5s ease-in-out infinite;
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px) scale(1.05);
          background: #1a2c26;
        }

        .scroll-top-btn svg {
          font-size: 24px;
        }

        @keyframes floatBtn {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .brand-column {
            grid-column: span 2;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
            flex-wrap: wrap;
          }

          .scroll-top-btn {
            width: 48px;
            height: 48px;
            right: 18px;
            bottom: 18px;
          }

          .email-social-row {
            padding-left: 0;
          }

          .contact-value {
            padding-left: 0;
          }
        }
      `}</style>

      <footer>
        <div className="footer-inner">

          <div className="footer-grid">

            {/* BRAND */}
            <div className="brand-column">

              <div className="logo-area">
                <img
                  src="/Logo-transparent.png"
                  alt="Lotus Analytics Logo"
                  className="brand-logo"
                />
              </div>

              <div className="contact-details">

                <div className="contact-box">

                  <p>
                    <span className="contact-label">
                      <HiOutlineLocationMarker />
                      Address
                    </span>

                    <span className="contact-value">
                      101 River Street <br />
                      Warrensburg, NY, 12885, US
                    </span>
                  </p>

                  <p>
                    <span className="contact-label">
                      <HiOutlinePhone />
                      Telephone
                    </span>

                    <span className="contact-value">
                      1.855.LOTUS.US
                    </span>
                  </p>

                  <p>
                    <span className="contact-label">
                      <HiOutlineMail />
                      E-mail
                    </span>

                    <span className="contact-value">
                      info@lotusus.com
                    </span>

                    {/* SOCIAL ICONS */}
                    <div className="email-social-row">

                      <a
                        href="https://www.linkedin.com/company/lotus-analytics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email-social-icon"
                      >
                        <FaLinkedinIn />
                      </a>

                      <a
                        href="https://www.facebook.com/lotusanalyticsusa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email-social-icon"
                      >
                        <FaFacebookF />
                      </a>

                      <a
                        href="https://x.com/analyticslotus?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email-social-icon"
                      >
                        <FaXTwitter />
                      </a>

                      <a
                        href="https://www.youtube.com/channel/UCURoGNIeW8gGgW8Q07TtCbA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email-social-icon"
                      >
                        <FaYoutube />
                      </a>

                    </div>
                  </p>

                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <div className="col-title">
                Business Services
              </div>

              <ul className="link-list">
                <li>Accounting & Finance</li>
                <li>Loss Prevention</li>
                <li>Reconciliation</li>
                <li>RPA & Automation</li>
                <li>Supply Chain Management</li>
                <li>HR</li>
                <li>Compliance</li>
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div>
              <div className="col-title">
                Solutions
              </div>

              <ul className="link-list">
                <li>Ticketing System</li>
                <li>Communication Manager</li>
                <li>Reporting</li>
                <li>Asset Tracker</li>
                <li>Fraud Prevention</li>
                <li>Inventory Management</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <div className="col-title">
                Company
              </div>

              <ul className="link-list">
                <li>About Us</li>
                <li>Careers</li>
              </ul>

              <button className="contact-sales-btn">
                Contact Sales
              </button>
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="footer-bottom">

            {/* LEFT */}
            <div className="footer-left">
              Copyright ©2021 All Rights Reserved,
              The Lotus Group of Companies, USA
            </div>

            {/* CENTER */}
            <div className="footer-center">
              Designed & Developed by{" "}
              <span>
                Nakshatra Namaha Creations
              </span>
            </div>

            {/* RIGHT */}
            <div className="footer-legal">

              <a href="/privacy-policy">
                Privacy Policy
              </a>

              <span>|</span>

              <a href="/terms-of-use">
                Terms of Use
              </a>

            </div>

          </div>

        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showScroll && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          <HiArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
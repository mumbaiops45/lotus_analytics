import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        /* --- Your CSS remains unchanged. --- */
        footer {
          background: #F5F2EB;
          padding: 80px 5vw 30px;
          color: #1e1e1c;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
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

        /* BRAND COLUMN */
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

        /* ADDRESS + CONTACT */
        .contact-details {
          font-size: 14px;
          line-height: 1.8;
          color: #444;
          margin-top: 10px;
        }

        .contact-box p {
          margin: 0 0 12px 0;
        }

        .contact-label {
          font-weight: 700;
          color: #111;
          display: inline-block;
          margin-bottom: 4px;
        }

        .contact-value {
          color: #444;
          display: block;
        }

        /* COLUMN TITLE */
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

        /* LINKS */
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

        /* BUTTON */
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

        /* BOTTOM BAR */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          padding-top: 25px;
          border-top: 1px solid rgba(0,0,0,0.08);
          font-size: 12px;
          color: #666;
        }

        .footer-legal {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: #666;
          text-decoration: none;
          transition: 0.2s;
        }

        .footer-legal a:hover {
          color: #5A8070;
        }

        .development-credit {
          font-size: 11px;
          color: #888;
          margin-top: 8px;
          text-align: center;
          letter-spacing: 0.3px;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.05);
          color: #333;
          text-decoration: none;
          transition: 0.25s ease;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .social-icon:hover {
          background: #5A8070;
          color: #fff;
          transform: translateY(-3px);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .brand-column {
            grid-column: span 2;
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
          }
        }
      `}</style>

      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            {/* BRAND + ADDRESS */}
            <div className="brand-column">
              <div className="logo-area">
                <img src="/Logo-transparent.png" alt="Lotus Analytics Logo" className="brand-logo" />
              </div>
              <div className="contact-details">
                <div className="contact-box">
                  <p>
                    <span className="contact-label">101 River Street</span>
                    <span className="contact-value">Warrensburg, NY, 12885, US</span>
                  </p>
                  <p>
                    <span className="contact-label">Telephone:</span>
                    <span className="contact-value">1.855.LOTUS.US</span>
                  </p>
                  <p>
                    <span className="contact-label">E-mail:</span>
                    <span className="contact-value">info@lotusus.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* BUSINESS SERVICES – FULL LIST */}
            <div>
              <div className="col-title">Business Services</div>
              <ul className="link-list">
                <li>Accounting & Finance</li>
                <li>Loss Prevention</li>
                <li>Reconciliation</li>
                <li>RPA & Automation</li>
                <li>Supply Chain Management</li>
                <li>HR</li>
                <li>Compliance</li>
                <li>Logistics & Reverse Logistics</li>
                <li>Business Consulting</li>
                <li>Custom Insights</li>
                <li>Custom Developments</li>
                <li>The Processing Partners</li>
              </ul>
            </div>

            {/* SOLUTIONS – FULL LIST */}
            <div>
              <div className="col-title">Solutions</div>
              <ul className="link-list">
                <li>Ticketing System</li>
                <li>Communication Manager</li>
                <li>Reporting</li>
                <li>Real Estate</li>
                <li>Asset Tracker</li>
                <li>BI</li>
                <li>Fraud Prevention</li>
                <li>Sales Engagement Center</li>
                <li>Commission Portal</li>
                <li>Warehouse Management</li>
                <li>Inventory Management</li>
                <li>Real Time</li>
              </ul>
            </div>

            {/* COMPANY + CONTACT SALES BUTTON */}
            <div>
              <div className="col-title">Company</div>
              <ul className="link-list">
                <li>About Us</li>
                <li>Careers</li>
              </ul>
              <button className="contact-sales-btn">Contact Sales</button>
            </div>
          </div>

          {/* BOTTOM – LEGAL + CREDIT + SOCIAL */}
          <div className="footer-bottom">
            <div>
              <div className="footer-legal">
                <span>© 2021 All Rights Reserved, The Lotus Group of Companies, USA</span>
                <span>|</span>
                <a href="/privacy-policy">Privacy Policy</a>
                <span>|</span>
                <a href="/terms-of-use">Terms of Use</a>
              </div>
              {/* <div className="development-credit">
                developed by nakshatra namaha creation
              </div> */}
            </div>
            <div className="social-icons">
              <button className="social-icon" aria-label="LinkedIn">in</button>
              <button className="social-icon" aria-label="X (Twitter)">𝕏</button>
              <button className="social-icon" aria-label="Facebook">f</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
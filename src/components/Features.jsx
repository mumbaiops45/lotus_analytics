// components/Features.jsx
import React from 'react';

const features = [
  { icon: '🏗️', title: 'Unified Business Hub', desc: 'One platform connecting Finance, HR, CRM, Operations — eliminating data silos and giving a 360° view of your business.' },
  { icon: '📡', title: 'Real-Time Intelligence', desc: 'Live dashboards and instant alerts so leadership always has accurate, up-to-the-minute data for fast decisions.' },
  { icon: '🔄', title: 'Seamless Integrations', desc: 'Connects with your existing tools — accounting software, HRMS, ERPs — without friction or data loss.' },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'Bank-grade security, role-based access control, and compliance with industry data protection standards.' },
];

const Features = () => {
  return (
    <section className="features" id="solutions">
      <div className="features-inner">
        <div className="section-eyebrow reveal">Centraverse™ Platform</div>
        <h2 className="section-title reveal reveal-delay-1">
          Everything connected.<br />
          <em>Nothing missed.</em>
        </h2>
        <div className="features-grid">
          <div className="features-list">
            {features.map((feature, idx) => (
              <div key={idx} className={`feature-item reveal ${idx > 0 ? `reveal-delay-${idx}` : ''}`}>
                <div className="feature-icon-box">{feature.icon}</div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="features-dashboard reveal reveal-delay-2">
            <div className="dash-header">
              <div className="dash-dots">
                <div className="dash-dot" />
                <div className="dash-dot" />
                <div className="dash-dot" />
              </div>
              <span className="dash-title">Centraverse™ Dashboard</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'rgba(245,240,232,0.4)' }}>
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="dash-metrics">
              <div className="dash-metric">
                <div className="dm-label">Revenue MTD</div>
                <div className="dm-value">₹ 48.2L</div>
                <div className="dm-change">↑ 12.4% vs last month</div>
              </div>
              <div className="dash-metric">
                <div className="dm-label">Active Clients</div>
                <div className="dm-value">142</div>
                <div className="dm-change">↑ 8 new this month</div>
              </div>
              <div className="dash-metric">
                <div className="dm-label">HR Efficiency</div>
                <div className="dm-value">94%</div>
                <div className="dm-change">↑ 3% improvement</div>
              </div>
              <div className="dash-metric">
                <div className="dm-label">Tasks Automated</div>
                <div className="dm-value">1,840</div>
                <div className="dm-change">This quarter</div>
              </div>
            </div>
            <div className="dash-chart">
              <div className="dash-chart-label">Quarterly Performance</div>
              <div className="dash-bars">
                <div className="d-bar" style={{ height: '45%', background: 'rgba(143,175,154,0.3)' }} />
                <div className="d-bar" style={{ height: '60%', background: 'rgba(143,175,154,0.4)' }} />
                <div className="d-bar" style={{ height: '55%', background: 'rgba(143,175,154,0.3)' }} />
                <div className="d-bar" style={{ height: '78%', background: 'rgba(143,175,154,0.5)' }} />
                <div className="d-bar" style={{ height: '65%', background: 'rgba(143,175,154,0.4)' }} />
                <div className="d-bar" style={{ height: '85%', background: '#8FAF9A' }} />
                <div className="d-bar" style={{ height: '70%', background: 'rgba(143,175,154,0.5)' }} />
                <div className="d-bar" style={{ height: '92%', background: '#C9A96E' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
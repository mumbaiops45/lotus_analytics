// components/Marquee.jsx
import React from 'react';

const Marquee = () => {
  const items = [
    { label: 'Finance & Accounting', icon: '💰' },
    { label: 'Human Resources', icon: '👥' },
    { label: 'CRM Solutions', icon: '🤝' },
    { label: 'Process Automation', icon: '⚙️' },
    { label: 'Business Intelligence', icon: '📊' },
    { label: 'Centraverse™', icon: '🌀' },
    { label: 'Reporting & Analytics', icon: '📈' },
    { label: 'Accountability Systems', icon: '🔐' },
  ];

  return (
    <div className="marquee-section-new">
      <div className="marquee-track-new">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="marquee-item-new">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.label}</span>
            <span className="marquee-dot-new" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
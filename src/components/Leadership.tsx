"use client";

import React from "react";
import { Users, UserCheck, CalendarDays, HeartHandshake } from "lucide-react";

export default function Leadership() {
  const leadershipData = [
    {
      icon: <UserCheck size={20} />,
      title: "Project Mentor – Department Technical Event",
      description: "Mentored a first-year engineering team through the development, CAD modeling, and fabrication of an oil-leakage detection prototype, supporting them from concept development through physical implementation.",
    },
    {
      icon: <CalendarDays size={20} />,
      title: "Technical Event Coordinator",
      description: "Successfully planned and coordinated orientation programs, technical workshops, and engineering challenges for junior engineering students at Vishnu Institute of Technology.",
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "NSS Volunteer",
      description: "Active volunteer in the National Service Scheme (NSS) at Vishnu Institute of Technology, engaging in social responsibility initiatives, health awareness, and community service drives.",
      isGreen: true,
    },
  ];

  return (
    <section id="leadership">
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Users size={14} /> Responsibility
          </div>
          <h2 className="section-title">Leadership & Campus Activities</h2>
          <p className="section-subtitle">
            Mentoring peers, orchestrating technical symposiums, and contributing to community welfare.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipData.map((item, idx) => (
            <div key={idx} className="glass-card leadership-card">
              <div 
                className="lead-icon-box"
                style={item.isGreen ? {
                  background: "rgba(16, 185, 129, 0.12)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                  color: "var(--accent-emerald)"
                } : {}}
              >
                {item.icon}
              </div>
              <h3 className="lead-title">{item.title}</h3>
              <p className="lead-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

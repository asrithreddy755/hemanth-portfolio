"use client";
 
import React from "react";
import { Users, UserCheck, CalendarDays, HeartHandshake } from "lucide-react";

export default function Leadership() {
  const leadershipData = [
    {
      icon: <UserCheck size={24} />,
      title: "Project Mentor",
      description: "Mentored a first-year engineering team through the development, CAD modeling, and fabrication of an oil-leakage detection prototype, supporting them from concept development through physical implementation.",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Technical Coordinator",
      description: "Successfully planned and coordinated orientation programs, technical workshops, and engineering challenges for junior engineering students at Vishnu Institute of Technology.",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "NSS Volunteer",
      description: "Active volunteer in the National Service Scheme (NSS) at Vishnu Institute of Technology, engaging in social responsibility initiatives, health awareness, and community service drives.",
    },
  ];

  return (
    <section id="leadership" className="section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">CAMPUS // LEADERSHIP</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Users size={14} /> RESPONSIBILITY
          </div>
          <h2 className="display-medium">Leadership & Activities.</h2>
        </div>

        <div className="leadership-grid grid-offset">
          {leadershipData.map((item, idx) => (
            <div key={idx} className="leadership-card">
              <div className="lead-icon-box">
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

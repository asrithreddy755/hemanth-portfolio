"use client";

import React from "react";
import { Trophy, Award, Medal, ShieldCheck } from "lucide-react";

export default function Achievements() {
  const achievementsData = [
    {
      icon: <Trophy size={24} />,
      prize: "Cash Prize: ₹3,000",
      title: "1st Prize – Researchers Day",
      description: "Clinched 1st Prize and a ₹3,000 cash prize for outstanding technical research presentation and numerical fluid simulation findings.",
      borderColor: "var(--secondary-glow)",
    },
    {
      icon: <Award size={24} />,
      prize: "Cash Prize: ₹3,000",
      title: "1st Prize – GEAR VIT",
      description: "Won 1st Prize and a ₹3,000 cash prize at GEAR VIT, the premier Mechanical Engineering Technical Event, demonstrating engineering design problem-solving.",
      borderColor: "var(--secondary-glow)",
    },
    {
      icon: <Medal size={24} />,
      prize: "Cash Prize: ₹1,000",
      title: "2nd Runner-Up – Smart India Hackathon",
      description: "Secured 2nd Runner-Up position with a ₹1,000 cash prize at the College Level for developing automated engineering solution prototypes.",
      borderColor: "rgba(59, 130, 246, 0.25)",
      isBlue: true,
    },
  ];

  return (
    <section id="achievements" style={{ background: "rgba(13, 19, 34, 0.2)" }}>
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Trophy size={14} /> Recognitions
          </div>
          <h2 className="section-title">Honors & Major Achievements</h2>
          <p className="section-subtitle">
            Recognized for excellence in research presentations, technical events, and hackathons.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, idx) => (
            <div key={idx} className="glass-card achievement-card">
              <div 
                className="trophy-badge" 
                style={item.isBlue ? { 
                  background: "rgba(59, 130, 246, 0.15)", 
                  borderColor: "rgba(59, 130, 246, 0.4)", 
                  color: "#60a5fa" 
                } : {}}
              >
                {item.icon}
              </div>
              <div 
                className="prize-pill"
                style={item.isBlue ? {
                  background: "rgba(59, 130, 246, 0.18)",
                  borderColor: "rgba(59, 130, 246, 0.35)",
                  color: "#93c5fd"
                } : {}}
              >
                {item.prize}
              </div>
              <h3 className="achieve-title">{item.title}</h3>
              <p className="achieve-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { GraduationCap, BookOpen, Award, Sparkles } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      icon: <GraduationCap size={20} />,
      year: "2023 – 2027",
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Vishnu Institute of Technology, Bhimavaram",
      scoreLabel: "Cumulative GPA",
      scoreValue: "8.22 / 10.0",
    },
    {
      icon: <BookOpen size={20} />,
      year: "2021 – 2023",
      degree: "Intermediate (M.P.C)",
      field: "Maths, Physics & Chemistry",
      institution: "Sasi Junior College, Tanuku",
      scoreLabel: "Final Score",
      scoreValue: "91.6%",
    },
    {
      icon: <Award size={20} />,
      year: "2020 – 2021",
      degree: "Secondary School (SSC)",
      field: "10th Standard Board",
      institution: "Sri Chaitanya Techno School, Penugonda",
      scoreLabel: "Perfect Score",
      scoreValue: "100%",
    },
  ];

  return (
    <section id="education" style={{ background: "rgba(13, 19, 34, 0.2)" }}>
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <GraduationCap size={14} /> Academic Journey
          </div>
          <h2 className="section-title">Education & Academic Background</h2>
          <p className="section-subtitle">
            Consistent academic excellence across school, intermediate, and undergraduate engineering studies.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass-card edu-card">
              <div>
                <div className="edu-header">
                  <div className="edu-icon-badge">{edu.icon}</div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div
                  style={{
                    color: "var(--primary-light)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {edu.field}
                </div>
                <p className="edu-institution">{edu.institution}</p>
              </div>
              <div className="edu-score-box">
                <span className="edu-score-label">{edu.scoreLabel}</span>
                <span className="edu-score-value">{edu.scoreValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="education" className="section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">EDUCATION // ACADEMIC</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <GraduationCap size={14} /> ACADEMIC JOURNEY
          </div>
          <h2 className="display-medium">Education & Background.</h2>
        </div>

        <div className="education-grid" style={{ marginLeft: "8.33%" }}>
          {educationData.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div>
                <div className="edu-header">
                  <div className="edu-icon-badge">{edu.icon}</div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div
                  style={{
                    color: "var(--text-theme-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.field}
                </div>
                <p className="edu-institution" style={{ color: "var(--text-theme-muted)", fontSize: "0.95rem" }}>{edu.institution}</p>
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

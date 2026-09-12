"use client";
 
import React from "react";
import { Laptop, Layers } from "lucide-react";

export default function Skills() {
  const technicalCategories = [
    {
      index: "01",
      title: "CAD & 3D Design",
      skills: ["CATIA V5", "AutoCAD", "Fusion 360"],
    },
    {
      index: "02",
      title: "Simulation & Analysis",
      skills: ["ANSYS Fluent (CFD)", "Multiphase Flow Modeling", "Transient Flow Analysis"],
    },
    {
      index: "03",
      title: "Data & Process Tools",
      skills: ["Microsoft Excel", "Power BI (Basic)", "PowerPoint & Word", "Cycle-Time Documentation"],
    },
    {
      index: "04",
      title: "Languages",
      skills: ["Telugu (Native)", "English", "Hindi (Basic)", "German (Basic)"],
    },
    {
      index: "05",
      title: "Professional Competencies",
      skills: [
        "Problem-Solving",
        "Analytical Thinking",
        "Fast Learning",
        "Teamwork & Mentorship",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="skills" className="section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">SKILLS // COMPETENCIES</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Laptop size={14} /> COMPETENCIES
          </div>
          <h2 className="display-medium">Skills & Core Expertise.</h2>
        </div>

        <div className="skills-grid" style={{ marginLeft: "8.33%" }}>
          {technicalCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.index}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
                <ul className="skill-bullet-list">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="skill-bullet-item">
                      <div className="skill-item-content">
                        <span className="skill-item-name">{skill}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

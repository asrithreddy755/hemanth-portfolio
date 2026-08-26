"use client";

import React from "react";
import { Laptop, Layers, Wind, BarChart3, Languages, Lightbulb } from "lucide-react";

export default function Skills() {
  const technicalCategories = [
    {
      title: "CAD & 3D Design",
      icon: <Layers size={18} />,
      skills: [
        { name: "CATIA V5", detail: "Part Design, Generative Shape Design, Assembly & Drafting" },
        { name: "AutoCAD", detail: "2D Engineering Drawings, GD&T, Orthographic & Isometric Projections" },
        { name: "Fusion 360", detail: "Parametric Solid Modeling, Rapid Prototyping & Renderings" },
      ],
    },
    {
      title: "Simulation & Analysis",
      icon: <Wind size={18} />,
      skills: [
        { name: "ANSYS Fluent (CFD)", detail: "Computational Fluid Dynamics, Boundary Conditions & Solution Solvers" },
        { name: "Multiphase Flow Modeling", detail: "Transient 3-Phase Fluid Interactions (Air, Water, Engine Oil)" },
        { name: "Computational Meshing", detail: "Geometry Discretization, Mesh Refinement & Quality Verification" },
      ],
    },
    {
      title: "Data & Office Tools",
      icon: <BarChart3 size={18} />,
      skills: [
        { name: "Microsoft Excel", detail: "Data Computation, Cycle-Time Analysis & Technical Worksheets" },
        { name: "Microsoft Power BI (Basic)", detail: "KPI Dashboard Visualization & Process Metrics" },
        { name: "MS PowerPoint & Word", detail: "Engineering Reports, Technical Documentation & Presentations" },
      ],
    },
    {
      title: "Languages",
      icon: <Languages size={18} />,
      skills: [
        { name: "Telugu", detail: "Native / Mother Tongue Proficiency" },
        { name: "English", detail: "Fluent / Professional Working Proficiency" },
        { name: "Hindi", detail: "Working Professional Proficiency" },
        { name: "German", detail: "Basic / Elementary Language Foundations" },
      ],
    },
  ];

  const softSkills = [
    { name: "Problem-Solving & Critical Thinking", detail: "Systematic root-cause identification & structured evaluation" },
    { name: "Analytical Thinking", detail: "Quantitative assessment of simulation data & physical principles" },
    { name: "Adaptability & Fast Learning", detail: "Quick onboarding to industrial workflows & software environments" },
    { name: "Teamwork & Mentorship", detail: "Collaborative spirit & guiding junior teams through fabrication" },
    { name: "Time Management", detail: "Milestone planning, prioritization & project schedule adherence" },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Laptop size={14} /> Competencies
          </div>
          <h2 className="section-title">Technical Skills & Tools Matrix</h2>
          <p className="section-subtitle">
            Categorized engineering software, data analysis, languages, and core soft skills.
          </p>
        </div>

        <div className="skills-grid">
          {technicalCategories.map((cat, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <ul className="skill-bullet-list">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-bullet-item">
                    <span className="skill-bullet-dot">•</span>
                    <div className="skill-item-content">
                      <span className="skill-item-name">{skill.name}</span>
                      <span className="skill-item-detail">{skill.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Full-width Soft Skills Card */}
          <div className="glass-card skill-category-card" style={{ gridColumn: "1 / -1" }}>
            <div className="skill-cat-header">
              <span className="skill-cat-icon">
                <Lightbulb size={18} />
              </span>
              <h3 className="skill-cat-title">Soft Skills & Professional Competencies</h3>
            </div>
            <ul
              className="skill-bullet-list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {softSkills.map((skill, idx) => (
                <li key={idx} className="skill-bullet-item">
                  <span className="skill-bullet-dot">•</span>
                  <div className="skill-item-content">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-detail">{skill.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

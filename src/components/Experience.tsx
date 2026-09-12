"use client";

import React from "react";
import { Briefcase, IndianRupee, Atom, Settings, ShieldAlert, Cpu, Wind, Timer } from "lucide-react";
import Card3D from "./Card3D";

export default function Experience() {
  return (
    <section id="experience" className="section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">EXPERIENCE // TIMELINE</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Briefcase size={14} /> CAREER TRAJECTORY
          </div>
          <h2 className="display-medium">Work Experience.</h2>
        </div>

        <div className="timeline" style={{ marginLeft: "8.33%" }}>
          {/* SRM University AP Internship */}
          <div className="timeline-item">
            <div className="exp-year-col">
              <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--text-dark)" }}>2026</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-theme-muted)", marginTop: "0.5rem" }}>JUN – JUL 2026</div>
              <div style={{ 
                marginTop: "1.5rem",
                display: "inline-flex",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                background: "rgba(22, 163, 74, 0.08)",
                border: "1px solid rgba(22, 163, 74, 0.2)",
                color: "var(--accent-emerald)",
                padding: "0.25rem 0.5rem",
                borderRadius: "2px",
                alignItems: "center",
                gap: "0.15rem",
              }}>
                <IndianRupee size={11} /> STIPEND: ₹8,000
              </div>
            </div>
            
            <div className="exp-content-col">
              <div className="exp-card">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">Research Intern</h3>
                    <div className="exp-company">SRM University AP // Transient Flow CFD</div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  <li>
                    Performed numerical analysis of transient three-phase pipe flow involving air, water, and engine oil using <strong>ANSYS Fluent</strong>.
                  </li>
                  <li>
                    Created the 3D pipe computational domain geometry, generated high-quality computational mesh, and configured the multiphase flow model.
                  </li>
                  <li>
                    Analyzed bubble formation dynamics, interphase boundary tracking, and phase interactions under transient flow conditions.
                  </li>
                </ul>

                <div className="exp-tags">
                  <span className="tech-tag">ANSYS Fluent</span>
                  <span className="tech-tag">Multiphase CFD</span>
                  <span className="tech-tag">Computational Meshing</span>
                  <span className="tech-tag">Transient Flow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Yamaha Motor India Internship */}
          <div className="timeline-item">
            <div className="exp-year-col">
              <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--text-dark)" }}>2025</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-theme-muted)", marginTop: "0.5rem" }}>JUN 2025</div>
            </div>
            
            <div className="exp-content-col">
              <div className="exp-card">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">Manufacturing Engineering Intern</h3>
                    <div className="exp-company">Yamaha Motor India Pvt. Ltd., Chennai</div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  <li>
                    Conducted a comprehensive <strong>time-study analysis</strong> for a proposed CKD (Completely Knocked Down) manufacturing facility.
                  </li>
                  <li>
                    Recorded cycle times across multiple assembly workstations to identify bottlenecks and suggest line-balancing improvements.
                  </li>
                  <li>
                    Gained practical exposure to casting and assembly operations through structured shop-floor visits, observing production flow and manufacturing protocols.
                  </li>
                </ul>

                <div className="exp-tags">
                  <span className="tech-tag">Time-Study Analysis</span>
                  <span className="tech-tag">CKD Manufacturing</span>
                  <span className="tech-tag">Line-Balancing</span>
                  <span className="tech-tag">Bottleneck Elimination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

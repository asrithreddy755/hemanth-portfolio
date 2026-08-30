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

                {/* Custom Inline SVG CFD Pipe flow Simulation Visual */}
                <div className="exp-visual-banner">
                  <svg
                    className="exp-visual-svg"
                    viewBox="0 0 600 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="600" height="160" fill="var(--bg-light)" />
                    <text x="15" y="25" fill="var(--text-muted-light)" fontSize="10" fontFamily="var(--font-mono)">
                      ANSYS Fluent Transient Multiphase Pipe Flow Simulation
                    </text>
                    
                    {/* CFD Pipe Structure */}
                    <rect x="50" y="45" width="500" height="60" rx="2" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    
                    {/* Multiphase Fluid Interfaces (VOF representation) */}
                    <path d="M 51 46 Q 150 55 250 50 T 450 52 T 549 46 L 549 60 L 51 60 Z" fill="rgba(0, 0, 0, 0.02)" />
                    <path d="M 51 60 Q 150 75 250 70 T 450 68 T 549 60 L 549 104 L 51 104 Z" fill="rgba(0, 0, 0, 0.05)" />
                    
                    {/* Injected Gas Bubbles */}
                    <circle cx="100" cy="75" r="8" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <circle cx="115" cy="78" r="4" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <circle cx="210" cy="65" r="6" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <circle cx="340" cy="80" r="10" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <circle cx="480" cy="70" r="7" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    
                    {/* Flow Direction Arrows */}
                    <line x1="15" y1="75" x2="35" y2="75" stroke="var(--text-dark)" strokeWidth="1" />
                    <path d="M 30 70 L 35 75 L 30 80" stroke="var(--text-dark)" strokeWidth="1" fill="none" />
                    <text x="12" y="93" fill="var(--text-dark)" fontSize="9" fontFamily="var(--font-mono)">INLET</text>

                    {/* Outlet */}
                    <line x1="565" y1="75" x2="585" y2="75" stroke="var(--text-dark)" strokeWidth="1" />
                    <path d="M 580 70 L 585 75 L 580 80" stroke="var(--text-dark)" strokeWidth="1" fill="none" />
                    <text x="560" y="93" fill="var(--text-dark)" fontSize="9" fontFamily="var(--font-mono)">OUTLET</text>
                  </svg>
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

                {/* Custom Inline SVG Manufacturing Line Balancing Visual */}
                <div className="exp-visual-banner">
                  <svg
                    className="exp-visual-svg"
                    viewBox="0 0 600 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="600" height="160" fill="var(--bg-light)" />
                    <text x="15" y="25" fill="var(--text-muted-light)" fontSize="10" fontFamily="var(--font-mono)">
                      CKD Manufacturing Line Balancing & Cycle Time Study
                    </text>

                    {/* Flow stations */}
                    <rect x="35" y="55" width="85" height="40" rx="2" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <text x="77" y="70" fill="var(--text-dark)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" fontWeight="bold">Casting</text>
                    <text x="77" y="83" fill="var(--text-muted-light)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">CT = 45s</text>

                    {/* Connection Arrow */}
                    <path d="M 125 75 L 145 75" stroke="var(--border-light)" strokeWidth="1" />
                    <path d="M 140 71 L 145 75 L 140 79" stroke="var(--border-light)" strokeWidth="1" fill="none" />

                    {/* Station 2: Machining */}
                    <rect x="155" y="55" width="90" height="40" rx="2" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <text x="200" y="70" fill="var(--text-dark)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" fontWeight="bold">Machining</text>
                    <text x="200" y="83" fill="var(--text-muted-light)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">CT = 52s</text>

                    {/* Connection Arrow */}
                    <path d="M 250 75 L 270 75" stroke="var(--border-light)" strokeWidth="1" />
                    <path d="M 265 71 L 270 75 L 265 79" stroke="var(--border-light)" strokeWidth="1" fill="none" />

                    {/* Station 3: Assembly (Bottleneck Highlighted in bold/darker border) */}
                    <rect x="280" y="55" width="95" height="40" rx="2" fill="none" stroke="var(--text-dark)" strokeWidth="1.5" />
                    <text x="327" y="70" fill="var(--text-dark)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" fontWeight="bold">CKD Assembly</text>
                    <text x="327" y="83" fill="var(--text-dark)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">CT = 78s ⚠️</text>

                    {/* Connection Arrow */}
                    <path d="M 380 75 L 400 75" stroke="var(--border-light)" strokeWidth="1" />
                    <path d="M 395 71 L 400 75 L 395 79" stroke="var(--border-light)" strokeWidth="1" fill="none" />

                    {/* Station 4: QA Inspection */}
                    <rect x="410" y="55" width="85" height="40" rx="2" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                    <text x="452" y="70" fill="var(--text-dark)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" fontWeight="bold">QA Check</text>
                    <text x="452" y="83" fill="var(--text-muted-light)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">CT = 35s</text>

                    {/* Takt Time line indicator */}
                    <line x1="30" y1="120" x2="570" y2="120" stroke="var(--text-muted-light)" strokeWidth="1" strokeDasharray="2, 2" />
                    <text x="35" y="135" fill="var(--text-muted-light)" fontSize="8" fontFamily="var(--font-mono)">Target Takt Time = 60s</text>

                    {/* Bottleneck Callout */}
                    <text x="370" y="28" fill="var(--text-dark)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">BOTTLENECK DETECTED (CT &gt; TAKT)</text>
                  </svg>
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

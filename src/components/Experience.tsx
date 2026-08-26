"use client";

import React from "react";
import { Briefcase, IndianRupee, Atom, Settings, ShieldAlert, Cpu, Wind, Timer } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Briefcase size={14} /> Career Trajectory
          </div>
          <h2 className="section-title">Work Experience & Internships</h2>
          <p className="section-subtitle">
            Hands-on computational research and shop-floor manufacturing exposure.
          </p>
        </div>

        <div className="timeline">
          {/* SRM University AP Internship */}
          <div className="timeline-item">
            <div className="timeline-node"></div>
            <div className="glass-card exp-card">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">Research Intern</h3>
                  <div className="exp-company">
                    <Atom size={16} style={{ color: "var(--primary-light)" }} /> SRM University AP
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                  <span
                    className="exp-period"
                    style={{
                      background: "rgba(16, 185, 129, 0.12)",
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      color: "#34d399",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.15rem",
                    }}
                  >
                    <IndianRupee size={12} /> Stipend: ₹8,000
                  </span>
                  <span className="exp-period">Jun 2026 – Jul 2026</span>
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
                  <rect width="600" height="160" rx="8" fill="#040713" />
                  <text x="15" y="25" fill="var(--text-dim)" fontSize="11" fontFamily="var(--font-mono)">
                    ANSYS Fluent Transient Multiphase Pipe Flow Simulation
                  </text>
                  
                  {/* CFD Pipe Structure */}
                  <rect x="50" y="45" width="500" height="60" rx="4" fill="rgba(6, 182, 212, 0.05)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5" />
                  
                  {/* Multiphase Fluid Interfaces (VOF representation) */}
                  {/* Phase 1: Oil layer (top) */}
                  <path d="M 51 46 Q 150 55 250 50 T 450 52 T 549 46 L 549 60 L 51 60 Z" fill="rgba(245, 158, 11, 0.2)" />
                  {/* Phase 2: Water (middle/bottom) */}
                  <path d="M 51 60 Q 150 75 250 70 T 450 68 T 549 60 L 549 104 L 51 104 Z" fill="rgba(6, 182, 212, 0.15)" />
                  
                  {/* Injected Gas Bubbles (Phase 3) */}
                  <circle cx="100" cy="75" r="8" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="115" cy="78" r="4" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="210" cy="65" r="6" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="225" cy="60" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="340" cy="80" r="10" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="360" cy="82" r="5" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  <circle cx="480" cy="70" r="7" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  
                  {/* Flow Direction Arrows */}
                  <line x1="15" y1="75" x2="35" y2="75" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#arrow)" />
                  <path d="M 30 70 L 35 75 L 30 80" stroke="var(--primary)" strokeWidth="2" fill="none" />
                  <text x="12" y="93" fill="var(--primary)" fontSize="10" fontFamily="var(--font-mono)">INLET</text>

                  {/* Outlet */}
                  <line x1="565" y1="75" x2="585" y2="75" stroke="var(--primary)" strokeWidth="2" />
                  <path d="M 580 70 L 585 75 L 580 80" stroke="var(--primary)" strokeWidth="2" fill="none" />
                  <text x="560" y="93" fill="var(--primary)" fontSize="10" fontFamily="var(--font-mono)">OUTLET</text>

                  {/* Legend Contours */}
                  <text x="440" y="25" fill="var(--text-dim)" fontSize="10" fontFamily="var(--font-sans)">Volume Fraction (Air):</text>
                  <rect x="535" y="15" width="40" height="10" fill="rgba(255, 255, 255, 0.6)" />
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
                <li>
                  Received a competitive research stipend of <strong>₹8,000</strong> for outstanding computational simulation performance.
                </li>
              </ul>

              <div className="exp-tags">
                <span className="tech-tag">
                  <Settings size={12} /> ANSYS Fluent
                </span>
                <span className="tech-tag">
                  <Wind size={12} /> Multiphase CFD
                </span>
                <span className="tech-tag">
                  <Cpu size={12} /> Computational Meshing
                </span>
                <span className="tech-tag">
                  <Atom size={12} /> Transient Flow Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Yamaha Motor India Internship */}
          <div className="timeline-item">
            <div className="timeline-node"></div>
            <div className="glass-card exp-card">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">Manufacturing Engineering Intern</h3>
                  <div className="exp-company">
                    <Settings size={16} style={{ color: "var(--secondary-light)" }} /> Yamaha Motor India Pvt. Ltd., Chennai
                  </div>
                </div>
                <span className="exp-period">Jun 2025</span>
              </div>

              {/* Custom Inline SVG Manufacturing Line Balancing Visual */}
              <div className="exp-visual-banner">
                <svg
                  className="exp-visual-svg"
                  viewBox="0 0 600 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="600" height="160" rx="8" fill="#040713" />
                  <text x="15" y="25" fill="var(--text-dim)" fontSize="11" fontFamily="var(--font-mono)">
                    CKD Manufacturing Line Balancing & Cycle Time Study
                  </text>

                  {/* Flow stations */}
                  {/* Station 1: Unboxing */}
                  <rect x="35" y="55" width="85" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="77" y="70" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Casting</text>
                  <text x="77" y="85" fill="var(--primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">CT = 45s</text>

                  {/* Connection Arrow */}
                  <path d="M 125 75 L 145 75" stroke="var(--border)" strokeWidth="1" />
                  <path d="M 140 71 L 145 75 L 140 79" stroke="var(--border)" strokeWidth="1" fill="none" />

                  {/* Station 2: Machining */}
                  <rect x="155" y="55" width="90" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="200" y="70" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Machining</text>
                  <text x="200" y="85" fill="var(--primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">CT = 52s</text>

                  {/* Connection Arrow */}
                  <path d="M 250 75 L 270 75" stroke="var(--border)" strokeWidth="1" />
                  <path d="M 265 71 L 270 75 L 265 79" stroke="var(--border)" strokeWidth="1" fill="none" />

                  {/* Station 3: Assembly (Bottleneck Highlighted in Red/Amber) */}
                  <rect x="280" y="55" width="95" height="40" rx="4" fill="rgba(245, 158, 11, 0.05)" stroke="var(--secondary)" strokeWidth="1.5" />
                  <text x="327" y="70" fill="var(--secondary-light)" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">CKD Assembly</text>
                  <text x="327" y="85" fill="var(--secondary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">CT = 78s ⚠️</text>

                  {/* Connection Arrow */}
                  <path d="M 380 75 L 400 75" stroke="var(--border)" strokeWidth="1" />
                  <path d="M 395 71 L 400 75 L 395 79" stroke="var(--border)" strokeWidth="1" fill="none" />

                  {/* Station 4: QA Inspection */}
                  <rect x="410" y="55" width="85" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="452" y="70" fill="var(--text-main)" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">QA Check</text>
                  <text x="452" y="85" fill="var(--primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">CT = 35s</text>

                  {/* Takt Time line indicator */}
                  <line x1="30" y1="120" x2="570" y2="120" stroke="var(--accent-emerald)" strokeWidth="1" strokeDasharray="3, 3" />
                  <text x="35" y="135" fill="var(--accent-emerald)" fontSize="9" fontFamily="var(--font-mono)">Target Takt Time = 60s</text>

                  {/* Bottleneck Callout */}
                  <rect x="290" y="15" width="160" height="20" rx="2" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.3)" />
                  <text x="370" y="28" fill="#f87171" fontSize="9" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">BOTTLENECK DETECTED (CT &gt; Takt)</text>
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
                <span className="tech-tag">
                  <Timer size={12} style={{ color: "var(--secondary-light)" }} /> Time-Study Analysis
                </span>
                <span className="tech-tag">
                  <Settings size={12} /> CKD Manufacturing
                </span>
                <span className="tech-tag">
                  <Cpu size={12} /> Casting Operations
                </span>
                <span className="tech-tag">
                  <ShieldAlert size={12} style={{ color: "#f87171" }} /> Bottleneck Elimination
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

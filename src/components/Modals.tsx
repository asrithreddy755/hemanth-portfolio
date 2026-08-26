"use client";

import React, { useState, useEffect } from "react";
import { X, FileText, Printer, ShieldAlert, Cpu, Award, Download, Info, Wind } from "lucide-react";

interface ModalsProps {
  activeModal: string | null;
  onClose: () => void;
  showToast: (message: string, type?: "success" | "info" | "error") => void;
}

export default function Modals({ activeModal, onClose, showToast }: ModalsProps) {
  const [agroSlide, setAgroSlide] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  // Print helper for Resume
  const handlePrint = () => {
    window.print();
  };

  // Agro-machine Slides
  const agroSlides = [
    {
      url: "/assets/images/agro-machine-main.png",
      label: "3D Assembly",
      caption: "CATIA V5 3D Isometric Assembly: Solar Canopy, Sapling Feeder Tray, Planting Arm & Weeding Blades"
    },
    {
      url: "/assets/images/agro-weeder-cad.jpg",
      label: "Weeding Blades",
      caption: "Rotary Weeding Blades Unit & Drive Shaft: 4-Rotor Cutting Mechanism modeled in CATIA V5"
    },
    {
      url: "/assets/images/agro-top-view.jpg",
      label: "Top View CAD",
      caption: "Top Orthographic View: 4-Channel Sapling Feeder, Solar Power Pod & Wheel Alignment"
    },
    {
      url: "/assets/images/agro-ansys-structural.png",
      label: "ANSYS FEA",
      caption: "ANSYS 2024 R2 Static Structural Analysis: Wheel Safety Factor (Min F.O.S = 1.25, Max = 15.0)"
    }
  ];

  return (
    <div className={`modal-overlay open`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* ========================================================================= */}
        {/* MODAL 1: AUTONOMOUS AGRO-MACHINE */}
        {/* ========================================================================= */}
        {activeModal === "project-agro" && (
          <div>
            <div className="section-tag">
              <Cpu size={14} /> Project Case Study & CAD Gallery
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              Autonomous Precision Agro-Machine for Planting & Weeding
            </h2>

            {/* Slide Gallery */}
            <div className="gallery-container">
              <div className="gallery-main-frame">
                <img src={agroSlides[agroSlide].url} alt={agroSlides[agroSlide].label} />
              </div>
              <div className="gallery-caption">
                <Info size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.4rem" }} />
                <span style={{ verticalAlign: "middle" }}>{agroSlides[agroSlide].caption}</span>
              </div>

              {/* Thumbnails */}
              <div className="gallery-thumbnails">
                {agroSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`gallery-thumb ${agroSlide === idx ? "active" : ""}`}
                    onClick={() => setAgroSlide(idx)}
                  >
                    <img src={slide.url} alt={slide.label} />
                    <span className="gallery-thumb-label">{slide.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <span className="tech-tag">CATIA V5</span>
              <span className="tech-tag">ANSYS 2024 R2 Static Structural</span>
              <span className="tech-tag">Solar-Powered Rover</span>
              <span className="tech-tag">Precision Planting & Weeding</span>
            </div>

            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <strong style={{ color: "var(--text-main)" }}>Problem Statement:</strong> Traditional planting and manual
                weeding in row crops (such as rice and onion) are labor-intensive, time-consuming, and cause heavy
                soil compaction with conventional large tractors.
              </div>

              <div>
                <strong style={{ color: "var(--text-main)" }}>CAD Design & Engineering Architecture (CATIA V5):</strong>
                <ul style={{ paddingLeft: "1.25rem", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <li><strong>Chassis & Power System:</strong> Modeled a lightweight triangular truss frame supporting rooftop photovoltaic solar panels for autonomous power replenishment.</li>
                  <li><strong>Sapling Tray & Planting Arm:</strong> Designed a 4-channel gravitational sapling feeder tray with synchronized planting arms for uniform spacing.</li>
                  <li><strong>Rotary Weeding Toolhead:</strong> Designed a 4-rotor shaft mechanism with high-tensile steel weeding blades that shred unwanted weeds without damaging adjacent crop roots.</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: "var(--text-main)" }}>Structural FEA Validation (ANSYS 2024 R2):</strong>
                <p style={{ marginTop: "0.25rem" }}>
                  Conducted Static Structural FEA simulations in <strong>ANSYS 2024 R2</strong> on the
                  paddle-wheel load-bearing component. The result achieved a <strong>Minimum Safety Factor of
                  3.9932</strong> (maximum 15.0), confirming high operational reliability and structural
                  integrity across harsh agricultural terrain.
                </p>
              </div>

              {/* Slide Deck Callout */}
              <div className="ppt-cta-card">
                <div>
                  <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: "1.05rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FileText size={16} /> Agro-Machine Project Presentation (PPT)
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#cbd5e1", marginTop: "0.25rem" }}>
                    Comprehensive slide deck covering design calculations, CAD bill-of-materials, and FEA simulation results.
                  </div>
                </div>
                <button className="btn btn-amber btn-sm" onClick={() => showToast("You can attach your PPT file to this project!", "info")}>
                  <Download size={14} /> View PPT Slides
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 2: CFD MULTIPHASE FLOW */}
        {/* ========================================================================= */}
        {activeModal === "project-cfd" && (
          <div>
            {/* Custom Inline SVG representing CFD pipe simulation */}
            <div className="modal-project-img">
              <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
                <rect width="600" height="200" fill="#040713" />
                <rect x="40" y="40" width="520" height="120" rx="4" fill="rgba(6, 182, 212, 0.05)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
                
                {/* Velocity heatmap contours */}
                <path d="M41 41 C 150 70, 250 50, 559 41 L 559 159 C 450 140, 250 150, 41 159 Z" fill="rgba(6, 182, 212, 0.1)" />
                <path d="M41 80 C 150 100, 250 90, 559 80 L 559 120 C 450 110, 250 115, 41 120 Z" fill="rgba(245, 158, 11, 0.15)" />
                
                {/* Bubble dynamics vectors */}
                <circle cx="150" cy="100" r="14" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
                <line x1="150" y1="100" x2="180" y2="105" stroke="#fff" strokeWidth="1.5" />
                <path d="M176 101 L 180 105 L 175 109" stroke="#fff" strokeWidth="1.5" />

                <circle cx="280" cy="90" r="10" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
                <line x1="280" y1="90" x2="305" y2="92" stroke="#fff" strokeWidth="1.5" />
                
                <circle cx="420" cy="110" r="16" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
                <line x1="420" y1="110" x2="455" y2="105" stroke="#fff" strokeWidth="1.5" />

                <text x="15" y="25" fill="var(--text-dim)" fontSize="10" fontFamily="var(--font-mono)">ANSYS FLUENT Eulerian Multiphase Domain Mesh</text>
                <text x="50" y="110" fill="var(--primary)" fontSize="14" fontWeight="bold">FLOW</text>
              </svg>
            </div>

            <div className="section-tag">
              <Wind size={14} /> Research Case Study
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.6rem", marginBottom: "1rem" }}>
              Numerical Analysis of Transient Three-Phase Pipe Flow
            </h2>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <span className="tech-tag">ANSYS Fluent</span>
              <span className="tech-tag">Multiphase CFD</span>
              <span className="tech-tag">Computational Meshing</span>
              <span className="tech-tag">SRM University AP</span>
              <span className="tech-tag">Stipend: ₹8,000</span>
            </div>

            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <strong style={{ color: "var(--text-main)" }}>Research Objective:</strong> Investigate complex
                hydrodynamic phenomena, bubble formation dynamics, and transient interphase interactions occurring
                between air, water, and engine oil inside pipe flows.
              </div>

              <div>
                <strong style={{ color: "var(--text-main)" }}>Methodology & Simulation Setup:</strong>
                <ul style={{ paddingLeft: "1.25rem", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <li>Constructed 3D pipe fluid geometry and generated boundary-fitted computational grids in ANSYS Fluent.</li>
                  <li>Configured transient multiphase Eulerian-Eulerian / VOF models with accurate fluid properties and viscosity ratios.</li>
                  <li>Simulated unsteady turbulent bubble inception, phase interface breakup, and pressure drop variations.</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: "var(--text-main)" }}>Research Impact:</strong> Provides valuable numerical data
                for multiphase oil-water-gas transmission pipelines, mitigating slug flow risks and phase separation
                issues. Awarded a research stipend of ₹8,000.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 3: OIL-LEAKAGE DETECTION PROTOTYPE */}
        {/* ========================================================================= */}
        {activeModal === "project-leak" && (
          <div>
            {/* Custom Inline SVG for Oil leak sensor prototype */}
            <div className="modal-project-img">
              <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
                <rect width="600" height="200" fill="#040713" />
                
                {/* Circuit board base */}
                <rect x="150" y="50" width="300" height="110" rx="6" fill="#062e1e" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" />
                
                {/* Copper traces */}
                <path d="M180 80 L230 80 L230 110 L270 110" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" fill="none" />
                <path d="M180 130 L250 130 L250 110" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" fill="none" />
                <path d="M370 105 L410 105" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" fill="none" />

                {/* Sensor head (resistance wire mesh) */}
                <rect x="270" y="85" width="100" height="40" rx="2" fill="#0a0f1d" stroke="#f59e0b" strokeWidth="1" />
                {/* Mesh wires */}
                <line x1="280" y1="85" x2="280" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="290" y1="85" x2="290" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="300" y1="85" x2="300" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="310" y1="85" x2="310" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="320" y1="85" x2="320" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="330" y1="85" x2="330" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="340" y1="85" x2="340" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="350" y1="85" x2="350" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                <line x1="360" y1="85" x2="360" y2="125" stroke="rgba(245, 158, 11, 0.3)" />
                
                {/* Falling Oil Drop */}
                <path d="M 320 20 C 316 35, 310 40, 310 45 C 310 50, 330 50, 330 45 C 330 40, 324 35, 320 20 Z" fill="#b45309" />
                <path d="M 320 85 C 316 93, 312 96, 312 99 C 312 103, 328 103, 328 99 C 328 96, 324 93, 320 85 Z" fill="#d97706" opacity="0.8" />

                {/* Alarm Warning Indicator (glowing red LED) */}
                <circle cx="410" cy="105" r="8" fill="#ef4444" filter="drop-shadow(0px 0px 8px #ef4444)" />
                <text x="410" y="85" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">ALARM</text>

                <text x="15" y="25" fill="var(--text-dim)" fontSize="10" fontFamily="var(--font-mono)">Active Loop Oil-Leakage Sensor Board Schematic</text>
              </svg>
            </div>

            <div className="section-tag">
              <Award size={14} /> Mentorship & Innovation
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.6rem", marginBottom: "1rem" }}>
              Oil-Leakage Detection Prototype
            </h2>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <span className="tech-tag">Rapid Prototyping</span>
              <span className="tech-tag">Junior Mentorship</span>
              <span className="tech-tag">Machinery Maintenance</span>
            </div>

            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <strong style={{ color: "var(--text-main)" }}>Project Scope:</strong> Prevent catastrophic machine
                failure and workplace hazards caused by unnoticed lubricating and hydraulic oil leakage.
              </div>

              <div>
                <strong style={{ color: "var(--text-main)" }}>Mentorship & Execution:</strong>
                <ul style={{ paddingLeft: "1.25rem", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <li>Guided a team of first-year mechanical engineering students from conceptualization through physical assembly.</li>
                  <li>Taught fabrication techniques, sensor housing packaging, and systematic testing.</li>
                  <li>Successfully fabricated a working prototype presented at the departmental technical showcase with high recognition.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 4: RESUME PREVIEW & PRINT */}
        {/* ========================================================================= */}
        {activeModal === "resume" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.5rem" }}>Resume Document Preview</h2>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Pulagam Hemanth Siva Reddy – Mechanical Engineering</span>
              </div>
              <button className="btn btn-primary btn-sm" onClick={handlePrint}>
                <Printer size={15} style={{ marginRight: "0.25rem" }} /> Print / Save as PDF
              </button>
            </div>

            {/* Printable Resume Sheet */}
            <div className="resume-paper" id="resume-print-area">
              <div className="resume-header">
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "#ffffff", marginBottom: "0.25rem" }}>
                  Pulagam Hemanth Siva Reddy
                </h1>
                <div style={{ color: "var(--primary-light)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Mechanical Engineering Student
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#cbd5e1", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <span>+91 7075688699</span>
                  <span>23pa1a0352@vishnu.edu.in</span>
                  <span>LinkedIn Profile</span>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>

              <div>
                <div className="resume-section-title">About</div>
                <p style={{ fontSize: "0.925rem", lineHeight: 1.6, color: "#cbd5e1" }}>
                  Final-year Mechanical Engineering student with practical exposure to engineering design,
                  manufacturing, simulation, and product development. Experienced in working on engineering
                  problems from concept development and 3D modeling to simulation and practical implementation
                  through academic projects and industrial internships. Strong analytical and problem-solving
                  mindset with a keen interest in developing reliable, efficient, and manufacturable engineering
                  solutions.
                </p>
              </div>

              <div>
                <div className="resume-section-title">Education</div>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff" }}>
                    <span>Bachelor of Technology in Mechanical Engineering</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-light)" }}>2023 – 2027</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: "0.9rem" }}>
                    <span>Vishnu Institute of Technology, Bhimavaram</span>
                    <span style={{ fontWeight: 600, color: "#ffffff" }}>CGPA: 8.22 / 10.0 (Up to 6th Sem)</span>
                  </div>
                </div>

                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff" }}>
                    <span>Intermediate (M.P.C)</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-light)" }}>2021 – 2023</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: "0.9rem" }}>
                    <span>Sasi Junior College, Tanuku</span>
                    <span style={{ fontWeight: 600, color: "#ffffff" }}>Percentage: 91.6%</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff" }}>
                    <span>Secondary School Certificate (SSC)</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-light)" }}>2020 – 2021</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: "0.9rem" }}>
                    <span>Sri Chaitanya Techno School, Penugonda</span>
                    <span style={{ fontWeight: 600, color: "#ffffff" }}>Percentage: 100%</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="resume-section-title">Work Experience</div>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff" }}>
                    <span>Research Intern — SRM University AP (Stipend: ₹8,000)</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-light)" }}>Jun 2026 – Jul 2026</span>
                  </div>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#cbd5e1", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <li>Performed numerical analysis of transient three-phase pipe flow involving air, water, and engine oil using ANSYS Fluent.</li>
                    <li>Created pipe geometry, generated computational mesh, and configured multiphase flow simulation.</li>
                    <li>Analyzed bubble formation and phase interactions under transient flow conditions.</li>
                    <li>Awarded research stipend of ₹8,000 for multiphase simulation research work.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff" }}>
                    <span>Manufacturing Engineering Intern — Yamaha Motor India Pvt. Ltd.</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-light)" }}>Jun 2025</span>
                  </div>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#cbd5e1", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <li>Conducted time-study analysis for proposed CKD manufacturing facility, recording cycle times across multiple assembly workstations and identifying bottlenecks.</li>
                    <li>Gained practical exposure to casting and assembly operations through shop-floor visits.</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="resume-section-title">Key Projects</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#ffffff" }}>
                    Autonomous Precision Agro-Machine for Planting & Weeding (CAD & Automation)
                  </div>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#cbd5e1", marginTop: "0.35rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <li>Designed lightweight autonomous agricultural machine concept for precision planting and weeding of row crops such as rice and onion.</li>
                    <li>Developed complete 3D assembly in CATIA V5 and evaluated frame under operational loading conditions.</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="resume-section-title">Technical Skills & Toolset</div>
                <div style={{ fontSize: "0.9rem", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div><strong>CAD & Design:</strong> CATIA V5 (Part design, Assembly), AutoCAD (2D drawing, GD&T), Fusion 360 (Modeling)</div>
                  <div><strong>Simulation & Analysis:</strong> ANSYS Fluent (CFD), Multiphase flow modeling, Meshing</div>
                  <div><strong>Data & Office:</strong> Microsoft Excel (Data formulas, Time-study sheets), Microsoft Power BI, Word & PowerPoint</div>
                  <div><strong>Languages:</strong> Telugu (Native), English (Fluent), Hindi (Working), German (Basic)</div>
                  <div><strong>Soft Skills:</strong> Problem-Solving, Critical Thinking, Adaptability, Mentorship & Teamwork, Time Management</div>
                </div>
              </div>

              <div>
                <div className="resume-section-title">Achievements & Honors</div>
                <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <li><strong>1st Prize – Researchers Day</strong> (Cash Prize: ₹3,000)</li>
                  <li><strong>1st Prize – GEAR VIT</strong>, Mechanical Engineering Technical Event (Cash Prize: ₹3,000)</li>
                  <li><strong>2nd Runner-Up – Smart India Hackathon</strong>, College Level (Cash Prize: ₹1,000)</li>
                </ul>
              </div>

              <div>
                <div className="resume-section-title">Leadership & Activities</div>
                <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <li><strong>Project Mentor:</strong> Guided a first-year team through CAD modeling and fabrication of an oil-leakage detection prototype.</li>
                  <li><strong>Event Coordinator:</strong> Organized orientation programs and technical workshops for junior students.</li>
                  <li><strong>NSS Volunteer:</strong> Active volunteer in the National Service Scheme.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

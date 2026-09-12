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
  const [cfdSlide, setCfdSlide] = useState(0);

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
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/WHOLE MACHINE.png",
      label: "3D CAD",
      caption: "CATIA V5 3D Isometric Assembly: Solar Canopy, Sapling Feeder Tray, Planting Arm & Weeding Blades"
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/SIMULATION OF WHEEL.png",
      label: "FEA Loading",
      caption: "ANSYS Static Structural Finite Element Analysis: Paddle-wheel loading stress contour (Safety Factor Min = 3.99)"
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/BROCHURE.jpg",
      label: "Specs Brochure",
      caption: "Project showcase presentation poster, technical parameters, and design specifications"
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/3.jpeg",
      label: "Fabrication",
      caption: "Chassis fabrication, structural joint assembly, and physical drive shaft mounting"
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/4.jpeg",
      label: "Testing",
      caption: "Autonomous solar charging tests and planetary weeding trials in soil terrain"
    }
  ];

  // CFD Slides
  const cfdSlides = [
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/srm2.jpeg",
      label: "Flow Contour",
      caption: "Eulerian Multiphase Flow simulation: Unsteady transient air-water-oil phase boundary velocity contour"
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/MESHING.jpg",
      label: "Domain Mesh",
      caption: "Computational mesh discretization grid: Hexahedral elements for structural pipe fluid volume"
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/INFLATION LAYERS.jpg",
      label: "Inflation",
      caption: "Boundary-fitted inflation layers generated at the pipe walls to capture shear stress gradients"
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/RESIDUAL GRAPH.jpg",
      label: "Residual plot",
      caption: "ANSYS Fluent solver residual convergence histories verifying mathematical precision"
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/srm 7.jpeg",
      label: "Phase Dist 1",
      caption: "Transient fluid interphase distribution contour detailing gas core inception"
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/srm 8.jpeg",
      label: "Phase Dist 2",
      caption: "Transient fluid interphase distribution downstream, analyzing liquid holdup profiles"
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
              <div className="gallery-thumbnails" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
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
                <a
                  href="/PPT.pptx"
                  download="Autonomous_Precision_Agro_Machine.pptx"
                  className="btn btn-amber btn-sm"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
                >
                  <Download size={14} /> Download PPT
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 2: CFD MULTIPHASE FLOW */}
        {/* ========================================================================= */}
        {activeModal === "project-cfd" && (
          <div>
            {/* Slide Gallery */}
            <div className="gallery-container">
              <div className="gallery-main-frame">
                <img src={cfdSlides[cfdSlide].url} alt={cfdSlides[cfdSlide].label} />
              </div>
              <div className="gallery-caption">
                <Info size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.4rem" }} />
                <span style={{ verticalAlign: "middle" }}>{cfdSlides[cfdSlide].caption}</span>
              </div>

              {/* Thumbnails */}
              <div className="gallery-thumbnails" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                {cfdSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`gallery-thumb ${cfdSlide === idx ? "active" : ""}`}
                    onClick={() => setCfdSlide(idx)}
                  >
                    <img src={slide.url} alt={slide.label} />
                    <span className="gallery-thumb-label">{slide.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-tag">
              <Wind size={14} /> Research Case Study & Simulation Gallery
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
        {/* MODAL 4: RESUME PREVIEW & DOWNLOAD */}
        {/* ========================================================================= */}
        {activeModal === "resume" && (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.5rem" }}>Resume</h2>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Pulagam Hemanth Siva Reddy – Mechanical Engineering</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href="/hemanth_siva_reddy.pdf"
                  download="Hemanth_Siva_Reddy_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
                >
                  <Download size={15} /> Download PDF
                </a>
                <button className="btn btn-secondary btn-sm" onClick={handlePrint} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <Printer size={15} /> Print
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div style={{
              flex: 1,
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(99,102,241,0.25)",
              background: "#1e1e2e",
              minHeight: "65vh",
            }}>
              <iframe
                src="/hemanth_siva_reddy.pdf"
                title="Hemanth Siva Reddy Resume"
                width="100%"
                height="100%"
                style={{ border: "none", minHeight: "65vh", display: "block" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

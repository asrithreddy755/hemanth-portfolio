"use client";
 
import React, { useState } from "react";
import { Compass, Image as ImageIcon, ArrowUpRight } from "lucide-react";
import Card3D from "./Card3D";

interface ProjectsProps {
  onOpenModal: (id: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  // Agro-machine stateful preview image
  const [agroCardPreview, setAgroCardPreview] = useState(
    "/Autonomous Precision Agro-Machine for Planting & Weeding/WHOLE MACHINE.png"
  );

  const agroThumbnails = [
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/WHOLE MACHINE.png",
      title: "Whole Machine CAD Assembly",
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/SIMULATION OF WHEEL.png",
      title: "Wheel Static FEA Simulation",
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/BROCHURE.jpg",
      title: "Technical Design Brochure",
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/3.jpeg",
      title: "Fabrication Chassis Assembly",
    },
    {
      url: "/Autonomous Precision Agro-Machine for Planting & Weeding/4.jpeg",
      title: "Electronics and Field Testing",
    },
  ];

  // CFD flow simulation stateful preview image
  const [cfdCardPreview, setCfdCardPreview] = useState(
    "/Analysis of transient three-phase pipe flow (SRM)/srm2.jpeg"
  );

  const cfdThumbnails = [
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/srm2.jpeg",
      title: "Eulerian Multiphase Flow Contour",
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/MESHING.jpg",
      title: "Computational Domain Grid Mesh",
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/MESHING OF CURVED PIPE.jpg",
      title: "Elbow Mesh Grid Discretization",
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/INFLATION LAYERS.jpg",
      title: "Boundary Wall Inflation Layers",
    },
    {
      url: "/Analysis of transient three-phase pipe flow (SRM)/RESIDUAL GRAPH.jpg",
      title: "Solver Iterative Convergence Plot",
    },
  ];

  return (
    <section id="projects" className="section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">PROJECTS // WORKS</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Compass size={14} /> SELECTED PROJECTS
          </div>
          <h2 className="display-medium">Works That Define Us.</h2>
        </div>

        <div className="projects-grid" style={{ marginLeft: "8.33%" }}>
          {/* PROJECT 1: AGRO-MACHINE */}
          <div className="project-card">
            <div className="project-banner">
              <img
                src={agroCardPreview}
                alt="Autonomous Precision Agro-Machine for Planting & Weeding CAD 3D Model"
                id="card-agro-preview"
              />
            </div>

            {/* Thumbnail quick-preview bar */}
            <div className="project-thumb-preview-strip">
              {agroThumbnails.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb.url}
                  alt={thumb.title}
                  title={thumb.title}
                  onClick={() => setAgroCardPreview(thumb.url)}
                  style={{ opacity: agroCardPreview === thumb.url ? 1 : 0.4 }}
                />
              ))}
            </div>

            <div className="project-card-body">
              <div className="project-category">CAD & Agricultural Automation</div>
              <h3 className="project-title" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.45rem" }}>
                Autonomous Precision Agro-Machine
              </h3>
              <p className="project-desc">
                Conceptualized, designed in <strong>CATIA V5</strong>, and structural-analyzed in
                <strong>ANSYS</strong> an autonomous solar-powered agricultural robotic rover for precision
                planting & rotary weeding in rice and onion crops.
              </p>

              <div className="project-footer">
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  <span className="tech-tag">CATIA V5</span>
                  <span className="tech-tag">ANSYS FEA</span>
                </div>
                <button className="btn-bracket" onClick={() => onOpenModal("project-agro")}>
                  <span className="bracket">[</span> CASE STUDY & GALLERY <span className="bracket">]</span>
                </button>
              </div>
            </div>
          </div>

          {/* PROJECT 2: CFD INVESTIGATION */}
          <div className="project-card">
            <div className="project-banner">
              <img
                src={cfdCardPreview}
                alt="Transient Three-Phase Pipe Flow CFD Simulation"
                id="card-cfd-preview"
              />
            </div>

            {/* Thumbnail quick-preview bar */}
            <div className="project-thumb-preview-strip">
              {cfdThumbnails.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb.url}
                  alt={thumb.title}
                  title={thumb.title}
                  onClick={() => setCfdCardPreview(thumb.url)}
                  style={{ opacity: cfdCardPreview === thumb.url ? 1 : 0.4 }}
                />
              ))}
            </div>

            <div className="project-card-body">
              <div className="project-category">CFD & Multiphase Simulation</div>
              <h3 className="project-title" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.45rem" }}>
                Transient Three-Phase Pipe Flow
              </h3>
              <p className="project-desc">
                High-fidelity numerical modeling of air-water-oil transient multiphase dynamics inside
                industrial pipeline geometry using ANSYS Fluent solver.
              </p>

              <div className="project-footer">
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  <span className="tech-tag">ANSYS Fluent</span>
                  <span className="tech-tag">Multiphase CFD</span>
                </div>
                <button className="btn-bracket" onClick={() => onOpenModal("project-cfd")}>
                  <span className="bracket">[</span> CASE DETAILS <span className="bracket">]</span>
                </button>
              </div>
            </div>
          </div>

          {/* PROJECT 3: OIL LEAKAGE DETECTOR */}
          <div className="project-card" style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
            {/* Inline SVG banner representing Oil sensor prototyping */}
            <div className="project-banner" style={{ height: "100%", borderBottom: "none", borderRight: "1px solid var(--border-light)" }}>
              <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                <rect width="400" height="225" fill="var(--bg-light)" />
                <rect x="100" y="50" width="200" height="120" rx="2" fill="none" stroke="var(--border-light)" strokeWidth="1" />
                
                {/* Microcontroller */}
                <rect x="140" y="80" width="120" height="60" rx="2" fill="var(--bg-light)" stroke="var(--text-dark)" strokeWidth="1" />
                <line x1="140" y1="95" x2="130" y2="95" stroke="var(--text-dark)" strokeWidth="1" />
                <line x1="140" y1="110" x2="130" y2="110" stroke="var(--text-dark)" strokeWidth="1" />
                <line x1="140" y1="125" x2="130" y2="125" stroke="var(--text-dark)" strokeWidth="1" />
                <line x1="260" y1="95" x2="270" y2="95" stroke="var(--text-dark)" strokeWidth="1" />
                <line x1="260" y1="110" x2="270" y2="110" stroke="var(--text-dark)" strokeWidth="1" />
                
                {/* Red warning LED */}
                <circle cx="200" cy="110" r="10" fill="#ef4444" opacity="0.1" />
                <circle cx="200" cy="110" r="4" fill="#ef4444" />

                <text x="200" y="30" fill="var(--text-muted-light)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">Active Machinery Loop Oil Leakage Board Prototype</text>
              </svg>
            </div>

            <div className="project-card-body">
              <div className="project-category">Prototyping & Mentorship</div>
              <h3 className="project-title" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.45rem" }}>
                Industrial Oil-Leakage Detector
              </h3>
              <p className="project-desc">
                Guided a first-year engineering team through concept ideation, CAD packaging, and fabrication of
                an active mechanical prototype to detect oil leakage in machinery.
              </p>

              <div className="project-footer">
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  <span className="tech-tag">Fabrication</span>
                  <span className="tech-tag">Prototyping</span>
                </div>
                <button className="btn-bracket" onClick={() => onOpenModal("project-leak")}>
                  <span className="bracket">[</span> CASE DETAILS <span className="bracket">]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

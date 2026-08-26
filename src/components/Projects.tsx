"use client";

import React, { useState } from "react";
import { Compass, Image, ArrowUpRight } from "lucide-react";

interface ProjectsProps {
  onOpenModal: (id: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  const [agroCardPreview, setAgroCardPreview] = useState("/assets/images/agro-machine-main.png");

  const agroThumbnails = [
    { url: "/assets/images/agro-machine-main.png", title: "Full CAD Assembly" },
    { url: "/assets/images/agro-weeder-cad.jpg", title: "Weeding Blades CAD" },
    { url: "/assets/images/agro-top-view.jpg", title: "Top View Layout" },
    { url: "/assets/images/agro-ansys-structural.png", title: "ANSYS Safety Factor" },
  ];

  return (
    <section id="projects" style={{ background: "rgba(13, 19, 34, 0.2)" }}>
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Compass size={14} /> Featured Work
          </div>
          <h2 className="section-title">Key Projects & Engineering Innovations</h2>
          <p className="section-subtitle">
            Designing mechanical assemblies, automated systems, and fluid dynamic investigations.
          </p>
        </div>

        <div className="projects-grid">
          {/* PROJECT 1: AGRO-MACHINE (WITH INTEGRATED REACT THUMBNAIL SWITCHER) */}
          <div className="glass-card project-card">
            <div className="project-banner">
              <img
                src={agroCardPreview}
                alt="Autonomous Precision Agro-Machine for Planting & Weeding CAD 3D Model"
                id="card-agro-preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  style={{ opacity: agroCardPreview === thumb.url ? 1 : 0.6 }}
                />
              ))}
            </div>

            <div className="project-card-body">
              <div className="project-category">CAD & Agricultural Automation</div>
              <h3 className="project-title">Autonomous Precision Agro-Machine for Planting & Weeding</h3>
              <p className="project-desc">
                Conceptualized, designed in <strong>CATIA V5</strong>, and structural-analyzed in
                <strong>ANSYS</strong> an autonomous solar-powered agricultural robotic rover for precision
                planting & rotary weeding in rice and onion crops.
              </p>

              <ul className="project-highlights">
                <li>Lightweight chassis modeled in <strong>CATIA V5</strong> with solar power canopy.</li>
                <li>4-rotor motorized weeding unit & multi-channel sapling feeder arm.</li>
                <li><strong>ANSYS FEA Safety Factor Analysis</strong> verified (Min F.O.S = 3.99).</li>
              </ul>

              <div className="project-footer">
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  <span className="tech-tag">CATIA V5</span>
                  <span className="tech-tag">ANSYS FEA</span>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => onOpenModal("project-agro")}>
                  <Image size={13} style={{ marginRight: "0.25rem" }} /> CAD Gallery & Details
                </button>
              </div>
            </div>
          </div>

          {/* PROJECT 2: CFD INVESTIGATION */}
          <div className="glass-card project-card">
            {/* Inline SVG banner representing CFD pipe simulation */}
            <div className="project-banner">
              <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                <rect width="400" height="225" fill="#040713" />
                <rect x="30" y="52" width="340" height="120" rx="4" fill="rgba(6, 182, 212, 0.04)" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1.5" />
                {/* Fluid wave */}
                <path d="M 31 112 Q 130 135 230 120 T 369 112 L 369 171 L 31 171 Z" fill="rgba(6, 182, 212, 0.12)" />
                <circle cx="120" cy="130" r="10" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.6)" />
                <circle cx="230" cy="115" r="7" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.6)" />
                <circle cx="310" cy="140" r="12" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.6)" />
                {/* Mesh grid cells overlay */}
                <line x1="100" y1="52" x2="100" y2="172" stroke="rgba(255,255,255,0.03)" />
                <line x1="200" y1="52" x2="200" y2="172" stroke="rgba(255,255,255,0.03)" />
                <line x1="300" y1="52" x2="300" y2="172" stroke="rgba(255,255,255,0.03)" />
                <text x="200" y="30" fill="var(--text-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">ANSYS Fluent Multiphase Pipe Flow Simulation</text>
              </svg>
            </div>

            <div className="project-card-body">
              <div className="project-category">CFD & Multiphase Simulation</div>
              <h3 className="project-title">Transient Three-Phase Pipe Flow CFD Investigation</h3>
              <p className="project-desc">
                High-fidelity numerical modeling of air-water-oil transient multiphase dynamics inside
                industrial pipeline geometry using ANSYS Fluent solver.
              </p>

              <ul className="project-highlights">
                <li>Structured and unstructured domain meshing with refinement.</li>
                <li>Tracking of air bubble inception and fluid phase boundary evolution.</li>
                <li>Detailed velocity and volume-fraction gradient evaluation.</li>
              </ul>

              <div className="project-footer">
                <span className="tech-tag">ANSYS Fluent</span>
                <button className="btn btn-outline btn-sm" onClick={() => onOpenModal("project-cfd")}>
                  <ArrowUpRight size={13} style={{ marginRight: "0.25rem" }} /> Case Details
                </button>
              </div>
            </div>
          </div>

          {/* PROJECT 3: OIL LEAKAGE DETECTOR */}
          <div className="glass-card project-card">
            {/* Inline SVG banner representing Oil sensor prototyping */}
            <div className="project-banner">
              <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                <rect width="400" height="225" fill="#040713" />
                <rect x="100" y="50" width="200" height="120" rx="4" fill="#062e1e" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" />
                
                {/* Microcontroller */}
                <rect x="140" y="80" width="120" height="60" rx="2" fill="#091b15" stroke="rgba(16,185,129,0.5)" />
                {/* Circuit pins */}
                <line x1="140" y1="95" x2="130" y2="95" stroke="#10b981" strokeWidth="1.5" />
                <line x1="140" y1="110" x2="130" y2="110" stroke="#10b981" strokeWidth="1.5" />
                <line x1="140" y1="125" x2="130" y2="125" stroke="#10b981" strokeWidth="1.5" />
                <line x1="260" y1="95" x2="270" y2="95" stroke="#10b981" strokeWidth="1.5" />
                <line x1="260" y1="110" x2="270" y2="110" stroke="#10b981" strokeWidth="1.5" />
                
                {/* Red warning LED */}
                <circle cx="200" cy="110" r="10" fill="#ef4444" opacity="0.8" />
                <circle cx="200" cy="110" r="5" fill="#fca5a5" />

                <text x="200" y="30" fill="var(--text-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">Active Machinery Loop Oil Leakage Board Prototype</text>
              </svg>
            </div>

            <div className="project-card-body">
              <div className="project-category">Prototyping & Mentorship</div>
              <h3 className="project-title">Industrial Oil-Leakage Detection Prototype</h3>
              <p className="project-desc">
                Guided a first-year engineering team through concept ideation, CAD packaging, and fabrication of
                an active mechanical prototype to detect oil leakage in machinery.
              </p>

              <ul className="project-highlights">
                <li>Mentored junior team through end-to-end prototype build.</li>
                <li>Early detection mechanism to avoid industrial equipment downtime.</li>
                <li>Showcased in Department Technical Event with high recognition.</li>
              </ul>

              <div className="project-footer">
                <span className="tech-tag">Fabrication</span>
                <button className="btn btn-outline btn-sm" onClick={() => onOpenModal("project-leak")}>
                  <ArrowUpRight size={13} style={{ marginRight: "0.25rem" }} /> Case Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

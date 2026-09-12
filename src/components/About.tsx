"use client";

import React from "react";
import { UserCog, Handshake, Layers, Wind, Timer, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-dark">
      <div className="vertical-label-container">
        <span className="vertical-label">ABOUT // PROFILE</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <UserCog size={14} /> PROFILE OVERVIEW
          </div>
          <h2 className="display-medium">Built on Precision.</h2>
        </div>

        <div className="about-grid" style={{ paddingLeft: "8.33%" }}>
          {/* Left Narrative Column */}
          <div className="about-narrative">
            <p className="body-large" style={{ color: "var(--text-light)" }}>
              I believe great engineering is honest. No excess, no pretence — just calculations, mechanics, and purpose working together. Every study I conduct is a commitment to that philosophy.
            </p>
            <p className="body-medium">
              I am a final-year Mechanical Engineering student at Vishnu Institute of
              Technology with practical exposure across engineering design, manufacturing optimization, CFD
              simulations, and product development.
            </p>
            <p className="body-medium">
              My experience ranges from analyzing transient multiphase fluid flow at <strong>SRM University
              AP</strong> using ANSYS Fluent (with a stipend of ₹8,000) to conducting line-balancing and
              time-study analysis for proposed CKD manufacturing facilities at <strong>Yamaha Motor
              India</strong>.
            </p>
            <p className="body-medium">
              With strong analytical thinking and proficiency in <strong>CATIA V5, AutoCAD, Fusion 360, and ANSYS
              Fluent</strong>, I strive to design reliable, efficient, and manufacturable mechanical
              systems that address real-world challenges.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a href="#contact" className="btn-bracket">
                <span className="bracket">[</span> LET&apos;S COLLABORATE <span className="bracket">]</span>
              </a>
            </div>
          </div>

          {/* Right Pillars Grid */}
          <div className="pillars-grid">
            {/* Pillar 1: CAD */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon">
                  <Layers size={24} />
                </div>
                <h4 className="pillar-title">3D CAD Modeling</h4>
              </div>
              <p className="pillar-desc">
                Comprehensive part modeling, parametric assemblies, and production drawings in CATIA V5 & Fusion 360.
              </p>
            </div>

            {/* Pillar 2: CFD */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon">
                  <Wind size={24} />
                </div>
                <h4 className="pillar-title">CFD Simulation</h4>
              </div>
              <p className="pillar-desc">
                Numerical simulation of transient three-phase fluid flow, mesh discretization, and boundary layers in ANSYS Fluent.
              </p>
            </div>

            {/* Pillar 3: Time-study */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon">
                  <Timer size={24} />
                </div>
                <h4 className="pillar-title">Work Time-Study</h4>
              </div>
              <p className="pillar-desc">
                Workstation cycle-time recording, line-balancing, bottleneck resolution, and CKD assembly analysis.
              </p>
            </div>

            {/* Pillar 4: Agricultural Automation */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon">
                  <Cpu size={24} />
                </div>
                <h4 className="pillar-title">Agro Automation</h4>
              </div>
              <p className="pillar-desc">
                Concept design of lightweight autonomous machinery for precision planting, weeding, and crop handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

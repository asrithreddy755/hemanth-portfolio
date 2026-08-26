"use client";

import React from "react";
import { UserCog, Handshake, Layers, Wind, Timer, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <UserCog size={14} /> Profile Overview
          </div>
          <h2 className="section-title">Engineering Mindset & Core Strengths</h2>
          <p className="section-subtitle">
            Blending analytical rigor, 3D modeling precision, and hands-on manufacturing insight.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Narrative Card */}
          <div className="glass-card about-narrative">
            <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-main)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              Turning Engineering Concepts into Viable Solutions
            </h3>
            <p>
              I am a <strong>Final-year Mechanical Engineering student</strong> at Vishnu Institute of
              Technology with practical exposure across engineering design, manufacturing optimization, CFD
              simulations, and product development.
            </p>
            <p>
              My experience spans analyzing transient multiphase fluid flow at <strong>SRM University
              AP</strong> using ANSYS Fluent (with a stipend of ₹8,000) to conducting line-balancing and
              time-study analysis for proposed CKD manufacturing facilities at <strong>Yamaha Motor
              India</strong>.
            </p>
            <p>
              With strong analytical thinking, proficiency in <strong>CATIA V5, AutoCAD, Fusion 360, and ANSYS
              Fluent</strong>, I strive to design reliable, efficient, and manufacturable mechanical
              systems that address real-world challenges.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a href="#contact" className="btn btn-outline btn-sm">
                <Handshake size={15} style={{ marginRight: "0.25rem" }} /> Let's Collaborate
              </a>
            </div>
          </div>

          {/* Right Pillars Grid */}
          <div className="pillars-grid">
            {/* Pillar 1: CAD */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Layers size={22} />
              </div>
              <h4 className="pillar-title">3D CAD & Modeling</h4>
              <p className="pillar-desc">
                Comprehensive part modeling, parametric assemblies, and production drawings in CATIA V5 & Fusion 360.
              </p>
            </div>

            {/* Pillar 2: CFD */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Wind size={22} />
              </div>
              <h4 className="pillar-title">CFD & Multiphase Flow</h4>
              <p className="pillar-desc">
                Numerical simulation of transient three-phase fluid flow, mesh discretization, and bubble dynamics in ANSYS Fluent.
              </p>
            </div>

            {/* Pillar 3: Time-study */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Timer size={22} />
              </div>
              <h4 className="pillar-title">Manufacturing Time-Study</h4>
              <p className="pillar-desc">
                Workstation cycle-time recording, line-balancing, bottleneck resolution, casting, and CKD assembly analysis.
              </p>
            </div>

            {/* Pillar 4: Agricultural Automation */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <Cpu size={22} />
              </div>
              <h4 className="pillar-title">Agricultural Automation</h4>
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

"use client";

import React from "react";
import { Scroll } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "rgba(13, 19, 34, 0.2)" }}>
      <div className="container">
        <div className="header-center">
          <div className="section-tag" style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--accent-emerald)" }}>
            <Scroll size={14} /> Credentials
          </div>
          <h2 className="section-title">Certifications & Specialized Courses</h2>
          <p className="section-subtitle">
            Verified national certifications enhancing engineering expertise.
          </p>
        </div>

        <div className="cert-grid">
          <div className="glass-card cert-card">
            <div className="cert-icon-box">
              <Scroll size={22} />
            </div>
            <div>
              <h3 className="cert-title">NPTEL Certification: Introduction to Composites</h3>
              <div className="cert-issuer">National Programme on Technology Enhanced Learning (NPTEL) / IITs</div>
              <p className="cert-desc">
                Comprehensive certification covering fiber-reinforced composite mechanics, anisotropic
                elasticity, laminate theory, manufacturing processes, and structural failure criteria in
                modern aerospace and mechanical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

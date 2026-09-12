"use client";
 
import React from "react";
import { Scroll } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-dark">
      <div className="vertical-label-container">
        <span className="vertical-label">CREDENTIALS // IIT</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Scroll size={14} /> CREDENTIALS
          </div>
          <h2 className="display-medium">Certifications.</h2>
        </div>

        <div className="cert-grid" style={{ marginLeft: "8.33%" }}>
          <div className="cert-card">
            <div className="cert-icon-box">
              <Scroll size={24} />
            </div>
            <h3 className="cert-title">Introduction to Composites</h3>
            <p className="cert-desc">
              Fiber-reinforced composite mechanics, anisotropic elasticity, laminate theory, manufacturing processes, and mechanical failure criteria.
            </p>
            <div className="cert-issuer" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <span>IIT // NPTEL</span>
              <a href="/NPTEL.pdf" target="_blank" rel="noopener noreferrer" className="btn-bracket" style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                <span className="bracket">[</span> Show Certificate <span className="bracket">]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

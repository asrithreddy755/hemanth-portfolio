"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
  ];

  const educationLinks = [
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* Column 1: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <span className="brand-logo-text" style={{ fontSize: "1.3rem" }}>HEMANTH.</span>
            <p className="body-small" style={{ maxWidth: "240px", lineHeight: 1.6, color: "var(--text-muted-light)" }}>
              Mechanical Engineering portfolio focusing on parametric CAD design, high-fidelity transient multiphase CFD simulations, and workstation cycle-time line balancing.
            </p>
          </div>

          {/* Column 2: About */}
          <div>
            <a href="#about" className="footer-col-heading">About</a>
            <ul className="footer-links">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Education */}
          <div>
            <a href="#education" className="footer-col-heading">Education</a>
            <ul className="footer-links">
              {educationLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Inquiries */}
          <div>
            <span className="footer-col-heading">Inquiries</span>
            <div className="footer-links" style={{ listStyle: "none" }}>
              <a
                href="mailto:23pa1a0352@vishnu.edu.in"
                style={{ color: "var(--text-muted-light)", textTransform: "none", textDecoration: "none", fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}
              >
                23pa1a0352@vishnu.edu.in ↗
              </a>
              <a
                href="tel:+917075688699"
                style={{ color: "var(--text-muted-light)", textDecoration: "none", fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}
              >
                +91 7075688699 ↗
              </a>
              <a
                href="https://www.linkedin.com/in/pulagam-hemanth-siva-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted-light)", textDecoration: "none", fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="body-small" style={{ textTransform: "none" }}>
            &copy; 2026 Pulagam Hemanth Siva Reddy. All rights reserved.
          </div>
          <a
            href="#hero"
            className="back-to-top"
            onClick={handleScrollToTop}
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        {/* Large watermark block */}
        <div className="footer-watermark-container">
          <div className="footer-watermark">HEMANTH.</div>
        </div>
      </div>
    </footer>
  );
}

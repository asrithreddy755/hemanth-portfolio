"use client";
 
import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Leadership", href: "#leadership" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <span className="brand-logo-text" style={{ fontSize: "1.5rem" }}>HEMANTH.</span>
            <p className="body-small" style={{ maxWidth: "250px", lineHeight: 1.5 }}>
              Mechanical Engineering portfolio focusing on parametric CAD design, high-fidelity transient multiphase CFD simulations, and workstation cycle-time line balancing.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <ul className="footer-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label.toUpperCase()}</a>
              </li>
            ))}
          </ul>

          {/* Column 3: Contact Inquiries */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <span className="body-small" style={{ textTransform: "uppercase", fontWeight: 600, color: "var(--text-dark)" }}>INQUIRIES</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="mailto:23pa1a0352@vishnu.edu.in" className="body-small" style={{ color: "var(--text-muted-light)", textTransform: "none" }}>
                23pa1a0352@vishnu.edu.in ↗
              </a>
              <a href="tel:+917075688699" className="body-small" style={{ color: "var(--text-muted-light)" }}>
                +91 7075688699 ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/pulagam-hemanth-siva-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="body-small" 
                style={{ color: "var(--text-muted-light)" }}
              >
                LINKEDIN ↗
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

        {/* Large watermark watermark block */}
        <div className="footer-watermark-container">
          <div className="footer-watermark">HEMANTH.</div>
        </div>
      </div>
    </footer>
  );
}

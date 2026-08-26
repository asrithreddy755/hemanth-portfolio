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
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#hero" className="brand-container" onClick={handleScrollToTop}>
            <div className="brand-avatar-wrap">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Pulagam Hemanth Siva Reddy" 
                className="brand-avatar" 
              />
            </div>
            <span className="brand-name">Pulagam Hemanth Siva Reddy</span>
          </a>

          <ul className="footer-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a 
            href="#hero" 
            className="back-to-top" 
            onClick={handleScrollToTop} 
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 Pulagam Hemanth Siva Reddy. All rights reserved.</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--primary-light)" }}>
            Precision CAD & CFD Engineering Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Send } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Leadership", id: "leadership" },
    { label: "Certifications", id: "certifications" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...navItems.map((item) => item.id), "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // matches scroll focus area
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-wrapper">
          {/* Logo & Brand */}
          <a href="#hero" className="brand-container">
            <div className="brand-avatar-wrap">
              <img
                src="/assets/images/profile.jpg"
                alt="Pulagam Hemanth Siva Reddy"
                className="brand-avatar"
              />
            </div>
            <span className="brand-name">Pulagam Hemanth Siva Reddy</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTA Buttons */}
          <div className="nav-actions">
            <button className="btn btn-outline btn-sm" onClick={onOpenResume}>
              <FileText size={15} style={{ marginRight: "0.25rem" }} /> Resume
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">
              <Send size={15} style={{ marginRight: "0.25rem" }} /> Contact
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <button
          className="modal-close-btn"
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close Menu"
          style={{ top: "1.5rem", right: "1.5rem" }}
        >
          <X size={20} />
        </button>

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-nav-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-nav-link"
          onClick={() => setIsDrawerOpen(false)}
        >
          Contact
        </a>

        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <button
            className="btn btn-outline"
            style={{ flex: 1 }}
            onClick={() => {
              setIsDrawerOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={16} /> Resume
          </button>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <Send size={16} /> Contact
          </a>
        </div>
      </div>
    </>
  );
}

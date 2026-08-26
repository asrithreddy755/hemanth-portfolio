"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Compass, Briefcase, Eye, Cpu, Wind, ShieldAlert } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const roles = [
    "CAD (CATIA V5)",
    "CFD Simulation (ANSYS Fluent)",
    "Manufacturing Time-Study",
    "Agricultural Automation"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let speed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentFullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === currentFullText) {
        setIsDeleting(true);
        // Pause at the end of typing
        speed = 2000;
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        // Pause before typing next phrase
        speed = 400;
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      {/* Robot Background Watermark */}
      <div className="hero-bg-watermark"></div>
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Final-Year Mechanical Engineering Student</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="gradient-text">Pulagam Hemanth</span> Siva Reddy
            </h1>

            <div className="hero-role-wrapper">
              <span>Specializing in&nbsp;</span>
              <span style={{ color: "var(--primary-light)", fontWeight: 600 }}>{currentText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-desc">
              Passionate about engineering design, multiphase CFD simulation, and manufacturing optimization.
              Experienced in taking concepts from 3D CAD assemblies into fluid flow simulations and real-world
              industrial implementations.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <Compass size={18} /> Explore Projects
              </a>
              <a href="#experience" className="btn btn-outline">
                <Briefcase size={18} /> Experience
              </a>
              <button className="btn btn-amber" onClick={onOpenResume}>
                <Eye size={18} /> View Resume
              </button>
            </div>

            <div className="hero-contact-strip">
              <a href="mailto:23pa1a0352@vishnu.edu.in" className="contact-pill">
                <Mail size={14} style={{ color: "var(--primary)" }} /> 23pa1a0352@vishnu.edu.in
              </a>
              <a href="tel:+917075688699" className="contact-pill">
                <Phone size={14} style={{ color: "var(--primary)" }} /> +91 7075688699
              </a>
              <a
                href="https://www.linkedin.com/in/pulagam-hemanth-siva-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
              >
                <i className="fa-brands fa-linkedin" style={{ fontSize: "14px", color: "#0ea5e9" }}></i> LinkedIn
              </a>
              <span className="contact-pill">
                <MapPin size={14} style={{ color: "var(--primary)" }} /> Andhra Pradesh, India
              </span>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="hero-visual">
            <div className="avatar-frame">
              <div className="cad-crosshair"></div>
              <img
                src="/assets/images/profile.jpg"
                alt="Pulagam Hemanth Siva Reddy"
                className="avatar-img-main"
              />

              {/* Floating Engineering Badges */}
              <div className="float-badge float-badge-1">
                <Cpu size={14} style={{ color: "#06b6d4" }} />
                <span>CATIA V5 & CAD</span>
              </div>

              <div className="float-badge float-badge-2">
                <Wind size={14} style={{ color: "#3b82f6" }} />
                <span>ANSYS Fluent CFD</span>
              </div>

              <div className="float-badge float-badge-3">
                <Briefcase size={14} style={{ color: "#f59e0b" }} />
                <span>Yamaha & SRM AP Intern</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics Strip */}
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-number">8.22</div>
            <div className="stat-label">B.Tech CGPA / 10.0 (Up to 6th Sem)</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Research & Industrial Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
}

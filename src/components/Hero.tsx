"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Compass, Briefcase, Eye, Cpu, Wind, ShieldAlert } from "lucide-react";
import Card3D from "./Card3D";

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

  // Parallax and Droid interactive coordinates & states
  const [sceneMouse, setSceneMouse] = useState({ x: 0, y: 0 });
  const [headYaw, setHeadYaw] = useState(0);
  const [headPitch, setHeadPitch] = useState(0);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const droidRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 1. Calculate 3D Parallax offset based on cursor relative to screen center
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) / (window.innerWidth / 2 || 1);
        const dy = (e.clientY - centerY) / (window.innerHeight / 2 || 1);
        setSceneMouse({ x: dx, y: dy });
      }

      // 2. Droid head & eyes yaw/pitch cursor tracking
      if (droidRef.current) {
        const dRect = droidRef.current.getBoundingClientRect();
        const dx = e.clientX - (dRect.left + dRect.width / 2);
        const dy = e.clientY - (dRect.top + dRect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const yaw = Math.max(-45, Math.min(45, (dx / window.innerWidth) * 80));
        const pitch = Math.max(-15, Math.min(15, (dy / window.innerHeight) * 35));

        setHeadYaw(yaw);
        setHeadPitch(pitch);

        const eyeX = (dx / dist) * 3;
        const eyeY = (dy / dist) * 1.5;
        setEyeOffset({ x: eyeX, y: eyeY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blinking schedule
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
    <section id="hero" className="hero-section section-light">
      <div className="vertical-label-container">
        <span className="vertical-label">PORTFOLIO // 2026</span>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content" style={{ paddingLeft: "8.33%" }}>
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Final-Year Mechanical Engineering Student</span>
            </div>

            <h1 className="hero-title" style={{ fontFamily: "var(--font-heading)", fontSize: "5rem", fontWeight: 300, lineHeight: 0.95, marginBottom: "2rem" }}>
              P. Hemanth <br />
              <span style={{ fontStyle: "italic" }}>Siva Reddy</span>
            </h1>

            <div className="hero-role-wrapper">
              <span>SPECIALIZING IN // </span>
              <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>{currentText.toUpperCase()}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-desc">
              Passionate about engineering design, multiphase CFD simulation, and manufacturing optimization.
              Experienced in taking concepts from 3D CAD assemblies into fluid flow simulations and real-world
              industrial implementations.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-bracket">
                <span className="bracket">[</span> EXPLORE PROJECTS <span className="bracket">]</span>
              </a>
              <a href="#experience" className="btn-bracket">
                <span className="bracket">[</span> EXPERIENCE <span className="bracket">]</span>
              </a>
              <button className="btn-bracket" onClick={onOpenResume}>
                <span className="bracket">[</span> VIEW RESUME <span className="bracket">]</span>
              </button>
            </div>

            {/* Meta Table Coordinate System (Osvald Technical Sidebar style) */}
            <div className="hero-contact-strip" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 2rem", borderTop: "1px solid var(--border-light)", paddingTop: "1.5rem", marginTop: "2rem" }}>
              <div>
                <span className="body-small" style={{ display: "block" }}>COORD:</span>
                <span className="body-small" style={{ color: "var(--text-dark)", fontWeight: 600 }}>16.5447° N // 81.5226° E</span>
              </div>
              <div>
                <span className="body-small" style={{ display: "block" }}>SYSTEM:</span>
                <span className="body-small" style={{ color: "var(--text-dark)", fontWeight: 600 }}>MECH DESIGN V2</span>
              </div>
              <div>
                <span className="body-small" style={{ display: "block" }}>SCALE:</span>
                <span className="body-small" style={{ color: "var(--text-dark)", fontWeight: 600 }}>MONOLITHIC / OPTIMIZED</span>
              </div>
              <div>
                <span className="body-small" style={{ display: "block" }}>INSTITUTION:</span>
                <span className="body-small" style={{ color: "var(--text-dark)", fontWeight: 600 }}>VIT BHIMAVARAM</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column — Clean Grayscale Portrait */}
          <div className="hero-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "visible" }}>
            <div
              ref={sceneRef}
              className="immersive-3d-scene"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "320px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible"
              }}
            >
              {/* Clean Portrait Card */}
              <div style={{
                width: "100%",
                maxWidth: "300px",
                transform: `translate(${sceneMouse.x * 6}px, ${sceneMouse.y * 6}px)`,
                transition: "transform 0.1s ease-out",
                pointerEvents: "auto",
                zIndex: 10
              }}>
                <Card3D maxTilt={10} scale={1.02}>
                  <div
                    className="clean-profile-frame"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "3/4",
                      background: "var(--bg-light)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "4px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden"
                    }}
                  >
                    {/* CAD Grid Backdrop */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                      backgroundSize: "15px 15px",
                      pointerEvents: "none",
                      zIndex: 1
                    }}></div>

                    {/* Metadata Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted-light)", zIndex: 2 }}>
                      <span>PORTRAIT_STILL</span>
                      <span>REF: PHSR_03</span>
                    </div>

                    {/* Grayscale Portrait */}
                    <div style={{ position: "relative", flexGrow: 1, margin: "10px 0", borderRadius: "2px", overflow: "hidden", border: "1px solid var(--border-light)", zIndex: 2 }}>
                      <img
                        src="/assets/images/heamanth.jpeg"
                        alt="Pulagam Hemanth Siva Reddy Portrait"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "grayscale(100%) contrast(105%)"
                        }}
                      />
                    </div>

                    {/* Technical footer details */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted-light)", zIndex: 2 }}>
                      <span>SYS_ACTIVE</span>
                      <span style={{ color: "var(--text-dark)", fontWeight: 700 }}>VERIFIED</span>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics Strip */}
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-number">8.22</div>
            <div className="stat-label">B.TECH CGPA // VIT BHIMAVARAM</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">02</div>
            <div className="stat-label">RESEARCH & INDUSTRIAL INTERNSHIPS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">05+</div>
            <div className="stat-label">CAD & SIMULATION SOFTWARE PACKAGES</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">03</div>
            <div className="stat-label">ACADEMIC & FABRICATION PROJECTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

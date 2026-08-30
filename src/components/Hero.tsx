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

          {/* Right Visual Column (Premium 3D Droid & Clean Grayscale Portrait) */}
          <div className="hero-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "visible" }}>
            <div
              ref={sceneRef}
              className="immersive-3d-scene"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "540px",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "visible"
              }}
            >
              {/* 1. Clean Portrait Card (Grayscale, Part of the Hero Section) */}
              <div style={{
                flex: "1 1 45%",
                maxWidth: "220px",
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
                      padding: "14px",
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
                    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-muted-light)", zIndex: 2 }}>
                      <span>PORTRAIT_STILL</span>
                      <span>REF: PHSR_03</span>
                    </div>

                    {/* Grayscale Portrait */}
                    <div style={{ position: "relative", flexGrow: 1, margin: "8px 0", borderRadius: "2px", overflow: "hidden", border: "1px solid var(--border-light)", zIndex: 2 }}>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-muted-light)", zIndex: 2 }}>
                      <span>SYS_ACTIVE</span>
                      <span style={{ color: "var(--text-dark)", fontWeight: 700 }}>VERIFIED</span>
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* 2. Big 3D Droid Character (Sleek Silver & White, rendered purely via premium SVG, tracks cursor) */}
              <div 
                ref={droidRef}
                className="big-droid-container"
                style={{
                  flex: "1 1 50%",
                  maxWidth: "260px",
                  height: "360px",
                  position: "relative",
                  transform: `translate(${sceneMouse.x * 12}px, ${sceneMouse.y * 12}px)`,
                  transition: "transform 0.1s ease-out",
                  zIndex: 8,
                  pointerEvents: "none"
                }}
              >
                {/* Droid SVG Wrapper */}
                <svg width="100%" height="100%" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Metallic white-silver gradient for main armor plates */}
                    <linearGradient id="armorWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="30%" stopColor="#f4f4f5" />
                      <stop offset="70%" stopColor="#e4e4e7" />
                      <stop offset="100%" stopColor="#d4d4d8" />
                    </linearGradient>
                    {/* Polished chrome/steel gradient for mechanical parts */}
                    <linearGradient id="chromeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4d4d8" />
                      <stop offset="25%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#a1a1aa" />
                      <stop offset="75%" stopColor="#e4e4e7" />
                      <stop offset="100%" stopColor="#52525b" />
                    </linearGradient>
                    {/* Dark carbon/chassis gradient */}
                    <linearGradient id="carbonDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3f3f46" />
                      <stop offset="100%" stopColor="#18181b" />
                    </linearGradient>
                    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#27272a" />
                    </radialGradient>
                  </defs>

                  {/* Robot Arms/Limbs Background layer */}
                  <path d="M 30 180 C 15 210, 15 240, 25 270" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 170 180 C 185 210, 185 240, 175 270" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />

                  {/* Torso/Chest (Big detailed white-and-silver body) */}
                  <path d="M 50 150 L 150 150 L 135 250 L 65 250 Z" fill="url(#armorWhite)" stroke="#27272a" strokeWidth="2" />
                  {/* Chest plate panel lines */}
                  <path d="M 55 170 L 145 170" stroke="#71717a" strokeWidth="1" />
                  <path d="M 100 170 L 100 250" stroke="#71717a" strokeWidth="1" />

                  {/* Vents & tech markings */}
                  <rect x="65" y="185" width="20" height="30" rx="2" fill="url(#carbonDark)" />
                  <rect x="115" y="185" width="20" height="30" rx="2" fill="url(#carbonDark)" />
                  <line x1="70" y1="192" x2="80" y2="192" stroke="#ffffff" strokeWidth="1" />
                  <line x1="70" y1="200" x2="80" y2="200" stroke="#ffffff" strokeWidth="1" />
                  <line x1="120" y1="192" x2="130" y2="192" stroke="#ffffff" strokeWidth="1" />
                  <line x1="120" y1="200" x2="130" y2="200" stroke="#ffffff" strokeWidth="1" />

                  {/* Core Power Ring (Power ring) */}
                  <circle cx="100" cy="225" r="14" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
                  <circle cx="100" cy="225" r="8" fill="#ffffff" />

                  {/* Neck base hydraulic cylinders */}
                  <rect x="90" y="125" width="20" height="25" fill="url(#carbonDark)" stroke="#27272a" strokeWidth="1" />
                  <line x1="95" y1="125" x2="95" y2="150" stroke="url(#chromeSteel)" strokeWidth="1.5" />
                  <line x1="105" y1="125" x2="105" y2="150" stroke="url(#chromeSteel)" strokeWidth="1.5" />

                  {/* Dynamic Head Group (yaw & pitch rotation) */}
                  <g style={{
                    transform: `rotate(${headYaw * 0.9}deg) translateY(${headPitch * 0.8}px)`,
                    transformOrigin: "100px 135px",
                    transition: "transform 0.08s ease-out"
                  }}>
                    {/* Head base plate */}
                    <ellipse cx="100" cy="135" rx="42" ry="12" fill="url(#carbonDark)" stroke="#18181b" strokeWidth="1" />

                    {/* Large Glossy White Head dome */}
                    <path d="M 50 130 C 50 65, 150 65, 150 130 Z" fill="url(#armorWhite)" stroke="#27272a" strokeWidth="2" />

                    {/* Top structural seam */}
                    <path d="M 100 66 L 100 100" stroke="#71717a" strokeWidth="1" />

                    {/* Ear nodes */}
                    <circle cx="48" cy="115" r="6" fill="#18181b" stroke="#71717a" strokeWidth="1" />
                    <circle cx="152" cy="115" r="6" fill="#18181b" stroke="#71717a" strokeWidth="1" />

                    {/* Dark Visor area */}
                    <path d="M 62 100 C 62 90, 138 90, 138 100 L 134 118 C 134 125, 66 125, 66 118 Z" fill="#09090b" stroke="#27272a" strokeWidth="1" />

                    {/* Visor glowing horizontal eye (white) */}
                    {!isBlinking ? (
                      <g style={{
                        transform: `translate(${eyeOffset.x * 2.2}px, ${eyeOffset.y * 1.2}px)`,
                        transition: "transform 0.06s ease-out"
                      }}>
                        {/* Camera lens */}
                        <circle cx="100" cy="108" r="6" fill="url(#eyeGlow)" stroke="#ffffff" strokeWidth="1" />
                        <circle cx="100" cy="108" r="2" fill="#ffffff" />
                      </g>
                    ) : (
                      // Blink state - thin slit
                      <line x1="94" y1="108" x2="106" y2="108" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    )}
                  </g>
                </svg>
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

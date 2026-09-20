"use client";

import React, { useEffect, useState, useRef } from "react";
import { Cpu, CheckCircle2, ArrowRight, ShieldCheck, HardDrive } from "lucide-react";
import DroidRobot from "./DroidRobot";

interface PreloaderProps {
  onComplete: () => void;
}

const ASSET_LIST = [
  { url: "/assets/images/heamanth.jpeg", label: "Profile Blueprint Image" },
  { url: "/project1.jpg", label: "Project Showcase Render 1" },
  { url: "/project2.jpg", label: "Project Showcase Render 2" },
  { url: "/RESEARCHERS DAY (1ST PRICE).jpg", label: "Award Certification - Researchers Day" },
  { url: "/INNOVIT (FIRST PRICE).jpg", label: "Award Certification - InnovIT" },
  { url: "/SIH (2ND RUNNER-UP).jpg", label: "Award Certification - SIH Hackathon" },
  { url: "/Autonomous Precision Agro-Machine for Planting & Weeding/WHOLE MACHINE.png", label: "Agro-Machine Full Assembly CAD" },
  { url: "/Autonomous Precision Agro-Machine for Planting & Weeding/SIMULATION OF WHEEL.png", label: "Agro-Machine FEA Stress Simulation" },
  { url: "/Autonomous Precision Agro-Machine for Planting & Weeding/BROCHURE.jpg", label: "Agro-Machine Technical Specification" },
  { url: "/Autonomous Precision Agro-Machine for Planting & Weeding/3.jpeg", label: "Agro-Machine Field Prototype 1" },
  { url: "/Autonomous Precision Agro-Machine for Planting & Weeding/4.jpeg", label: "Agro-Machine Field Prototype 2" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/srm2.jpeg", label: "CFD Pipe Flow Velocity Streamlines" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/MESHING OF CURVED PIPE.jpg", label: "CFD Curved Pipe Mesh Generation" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/MESHING.jpg", label: "CFD Surface Mesh Details" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/INFLATION LAYERS.jpg", label: "CFD Boundary Inflation Mesh" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/RESIDUAL GRAPH.jpg", label: "ANSYS Convergence Graph" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/srm 7.jpeg", label: "CFD Pressure Distribution Plot" },
  { url: "/Analysis of transient three-phase pipe flow (SRM)/srm 8.jpeg", label: "CFD Phase Volume Fraction" },
  { url: "/oil-leakage detection prototype/1.jpeg", label: "Oil Leak Detector Circuit Schematic" },
  { url: "/oil-leakage detection prototype/IMG_20260425_164826.jpg", label: "Oil Leak Hardware Rig" },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentLabel, setCurrentLabel] = useState("Initializing System & CAD Assets...");
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Dynamic robot speech bubble message
  const getRobotSpeech = () => {
    if (isDone) return "System online! Ready to explore portfolio.";
    if (progress < 25) return "Initiating CAD system diagnostics...";
    if (progress < 55) return `Downloading project renders (${loadedCount}/${ASSET_LIST.length})...`;
    if (progress < 85) return "Compiling CFD ANSYS simulation plots...";
    return "Finalizing asset preload sequence...";
  };


  // Target percentage to smooth out the progress animation
  const targetProgressRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    let completedAssets = 0;
    const totalAssets = ASSET_LIST.length;

    const updateAssetProgress = (label: string) => {
      if (!mounted) return;
      completedAssets += 1;
      setLoadedCount(completedAssets);
      setCurrentLabel(label);

      const calculatedPercent = Math.round((completedAssets / totalAssets) * 100);
      targetProgressRef.current = Math.min(calculatedPercent, 100);
    };

    // Preload image assets
    ASSET_LIST.forEach((asset) => {
      const img = new Image();
      img.src = asset.url;
      
      const handleLoad = () => {
        updateAssetProgress(`Loaded: ${asset.label}`);
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Continue progress even if asset fails
    });

    // Check fonts readiness as well
    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (mounted) {
          // font ready
        }
      });
    }

    // Smoothly animate progress counter to target
    const interval = setInterval(() => {
      if (!mounted) return;
      setProgress((prev) => {
        const target = targetProgressRef.current;
        if (prev < target) {
          const step = Math.ceil((target - prev) / 3);
          return Math.min(prev + step, target);
        }
        return prev;
      });
    }, 40);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  // Handle completion when progress reaches 100% and min count reached
  useEffect(() => {
    if (progress >= 100 && loadedCount >= ASSET_LIST.length && !isDone) {
      setIsDone(true);
      setCurrentLabel("All Media & Schematics Loaded Successfully");

      // Short smooth delay before auto transition
      const timer = setTimeout(() => {
        handleEnter();
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [progress, loadedCount, isDone]);

  const handleEnter = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 600); // match fade duration
  };

  return (
    <div
      className={`preloader-overlay ${isFading ? "preloader-fade-out" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "var(--bg-light, #fafafa)",
        color: "var(--text-dark, #0a0a0a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem 2rem",
        fontFamily: "var(--font-body, sans-serif)",
        userSelect: "none",
        overflow: "hidden",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isFading ? "scale(1.02)" : "scale(1)",
        opacity: isFading ? 0 : 1,
      }}
    >
      {/* Blueprint Grid Lines background matching site vertical lines */}
      <div
        className="vertical-grid-lines"
        style={{
          position: "absolute",
          inset: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)", borderLeft: "1px solid rgba(10, 10, 10, 0.05)" }} />
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)" }} />
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)" }} />
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)" }} />
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)" }} />
        <div style={{ borderRight: "1px solid rgba(10, 10, 10, 0.05)" }} />
      </div>

      {/* Decorative Corner Blueprint Markers */}
      <div className="preloader-corner top-left" style={{ color: "#71717a", fontFamily: "var(--font-mono)" }}>
        <span>PORTFOLIO // 2026</span>
      </div>
      <div className="preloader-corner top-right" style={{ color: "#71717a", fontFamily: "var(--font-mono)" }}>
        <span>VISHNU_INST_TECH // MECH_DEPT</span>
      </div>

      {/* Top Header Bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              background: "rgba(22, 163, 74, 0.1)",
              border: "1px solid rgba(22, 163, 74, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#16a34a",
            }}
          >
            <Cpu size={20} className="spin-slow" />
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#0a0a0a",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              P. Hemanth <span style={{ fontStyle: "italic" }}>Siva Reddy</span>
            </h2>
            <p style={{ fontSize: "0.725rem", color: "#71717a", fontFamily: "var(--font-mono)", margin: 0, letterSpacing: "0.05em" }}>
              MECHANICAL ENGINEERING PORTFOLIO
            </p>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            padding: "0.4rem 0.85rem",
            borderRadius: "20px",
            background: "#ffffff",
            border: "1px solid rgba(10, 10, 10, 0.1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            color: isDone ? "#16a34a" : "#0a0a0a",
          }}
        >
          {isDone ? (
            <>
              <CheckCircle2 size={15} style={{ color: "#16a34a" }} />
              <span style={{ fontWeight: 600 }}>SYSTEM READY</span>
            </>
          ) : (
            <>
              <HardDrive size={15} className="pulse-fast" style={{ color: "#16a34a" }} />
              <span>PRELOADING ASSETS ({loadedCount}/{ASSET_LIST.length})</span>
            </>
          )}
        </div>
      </div>

      {/* Main Center Display */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Architectural Dial & Percentage Display */}
        <div style={{ position: "relative", marginBottom: "2.25rem" }}>
          {/* Animated Circular Progress Indicator */}
          <svg width="190" height="190" viewBox="0 0 190 190" style={{ transform: "rotate(-90deg)" }}>
            {/* Outer Soft Light Ring */}
            <circle
              cx="95"
              cy="95"
              r="84"
              fill="none"
              stroke="rgba(10, 10, 10, 0.07)"
              strokeWidth="4"
            />
            {/* Emerald Progress Stroke */}
            <circle
              cx="95"
              cy="95"
              r="84"
              fill="none"
              stroke="#16a34a"
              strokeWidth="5"
              strokeDasharray={527.78}
              strokeDashoffset={527.78 - (527.78 * progress) / 100}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.15s ease-out",
                filter: "drop-shadow(0 0 6px rgba(22, 163, 74, 0.3))",
              }}
            />
          </svg>

          {/* Inner Content Display */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "4rem",
                fontWeight: 400,
                lineHeight: 1,
                color: "#0a0a0a",
                letterSpacing: "-0.03em",
              }}
            >
              {progress}<span style={{ fontSize: "2rem", color: "#16a34a", fontStyle: "normal" }}>%</span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono, sans-serif)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                color: "#71717a",
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              {isDone ? "COMPLETE" : "PRELOADING MEDIA"}
            </span>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "rgba(10, 10, 10, 0.08)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "1.25rem",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#16a34a",
              borderRadius: "2px",
              transition: "width 0.2s ease-out",
            }}
          />
        </div>

        {/* Asset Loading Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.825rem",
            fontFamily: "var(--font-mono)",
            color: "#52525b",
            minHeight: "24px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: isDone ? "#16a34a" : "#eab308",
              boxShadow: isDone ? "0 0 6px rgba(22, 163, 74, 0.6)" : "0 0 6px rgba(234, 179, 8, 0.6)",
            }}
          />
          <span>{currentLabel}</span>
        </div>

        {/* Bracket Button (matching hero style) */}
        {isDone && (
          <button
            onClick={handleEnter}
            className="btn-bracket"
            style={{
              marginTop: "2rem",
              padding: "0.75rem 2rem",
              fontSize: "0.85rem",
              fontFamily: "var(--font-mono)",
              background: "#0a0a0a",
              color: "#ffffff",
              border: "1px solid #0a0a0a",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#16a34a";
              e.currentTarget.style.borderColor = "#16a34a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0a0a0a";
              e.currentTarget.style.borderColor = "#0a0a0a";
            }}
          >
            <span className="bracket" style={{ opacity: 0.7 }}>[</span>
            <span>ENTER PORTFOLIO</span>
            <span className="bracket" style={{ opacity: 0.7 }}>]</span>
            <ArrowRight size={15} style={{ marginLeft: "4px" }} />
          </button>
        )}
      </div>

      {/* Bottom Technical Specifications Footer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: "0.725rem",
          fontFamily: "var(--font-mono)",
          color: "#71717a",
          borderTop: "1px solid rgba(10, 10, 10, 0.08)",
          paddingTop: "1rem",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <span>CAD // CATIA V5 & SOLIDWORKS</span>
          <span>CFD // ANSYS FLUENT</span>
          <span>TIME STUDY // YAMAHA MOTOR</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <ShieldCheck size={14} style={{ color: "#16a34a" }} />
          <span>ALL ASSETS PRELOADED</span>
        </div>
      </div>

      {/* Interactive Droid Robot on Loading Screen */}
      <DroidRobot speechBubble={getRobotSpeech()} zIndex={100000} />
    </div>
  );
}


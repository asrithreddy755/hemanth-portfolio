"use client";

import React, { useState, useEffect, useRef } from "react";

export default function DroidRobot() {
  const [headYaw, setHeadYaw] = useState(0);
  const [headPitch, setHeadPitch] = useState(0);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [proximity, setProximity] = useState(0);
  const [sensorOffset, setSensorOffset] = useState({ x: 0, y: 0 });
  const [isOverDark, setIsOverDark] = useState(false);

  const droidRef = useRef<HTMLDivElement>(null);

  // Background darkness detection based on scroll position
  useEffect(() => {
    const checkBackground = () => {
      if (!droidRef.current) return;
      const rect = droidRef.current.getBoundingClientRect();
      const darkSections = document.querySelectorAll(".section-dark");
      let overDark = false;
      darkSections.forEach((sec) => {
        const sRect = sec.getBoundingClientRect();
        // Check if droid overlaps this dark section vertically
        if (rect.bottom > sRect.top && rect.top < sRect.bottom) {
          overDark = true;
        }
      });
      setIsOverDark(overDark);
    };

    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    window.addEventListener("resize", checkBackground);
    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  // Mouse tracking for gaze and sensor proximity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (droidRef.current) {
        const dRect = droidRef.current.getBoundingClientRect();
        const dx = e.clientX - (dRect.left + dRect.width / 2);
        const dy = e.clientY - (dRect.top + dRect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const yaw = Math.max(-45, Math.min(45, (dx / window.innerWidth) * 80));
        const pitch = Math.max(-15, Math.min(15, (dy / window.innerHeight) * 35));

        setHeadYaw(yaw);
        setHeadPitch(pitch);

        const eyeX = (dx / dist) * 4;
        const eyeY = (dy / dist) * 2;
        setEyeOffset({ x: eyeX, y: eyeY });

        // Proximity calculation: ranges 0 (far) to 1 (near)
        const prox = Math.max(0, Math.min(1, 1 - (dist - 60) / 380));
        setProximity(prox);

        // Reactive sensor offset towards cursor
        const pull = prox * 10;
        const sX = (dx / dist) * pull;
        const sY = (dy / dist) * (pull * 0.7);
        setSensorOffset({ x: sX, y: sY });
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

  // Color tokens adapted for dark vs light background with high thickness & contrast
  const isNear = proximity > 0.3;

  // Outer orbit ring stroke
  const orbitStroke = isOverDark
    ? isNear ? "#38bdf8" : "#f4f4f5"
    : isNear ? "#0284c7" : "#18181b";

  // Precision telemetry ticks stroke
  const tickStroke = isOverDark
    ? isNear ? "#38bdf8" : "#e4e4e7"
    : isNear ? "#0284c7" : "#18181b";

  // Pulse wave stroke
  const pulseStroke = isOverDark
    ? isNear ? "#38bdf8" : "rgba(255, 255, 255, 0.75)"
    : isNear ? "#0284c7" : "rgba(24, 24, 27, 0.5)";

  // Inner frame fill and border
  const innerFrameFill = isOverDark ? "#09090b" : "#ffffff";
  const innerFrameStroke = isOverDark
    ? isNear ? "#38bdf8" : "#d4d4d8"
    : isNear ? "#0284c7" : "#18181b";

  // Center core pupil
  const pupilFill = isOverDark
    ? isNear ? "#38bdf8" : "#ffffff"
    : isNear ? "#0284c7" : "#18181b";

  return (
    <div
      ref={droidRef}
      className="bottom-right-droid"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "25px",
        width: "215px",
        height: "255px",
        zIndex: 15,
        pointerEvents: "none",
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
      }}
    >
      <style>{`
        @keyframes sensorFloatL {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes sensorFloatR {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(6px);
          }
        }
        @keyframes sensorPulseWave {
          0% {
            transform: scale(0.65);
            opacity: 0.85;
          }
          70% {
            transform: scale(1.65);
            opacity: 0.25;
          }
          100% {
            transform: scale(2.15);
            opacity: 0;
          }
        }
        @keyframes sensorOrbitSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes sensorOrbitSpinRev {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @media (max-width: 1024px) {
          .bottom-right-droid {
            display: none !important;
          }
        }
        .sensor-float-l {
          animation: sensorFloatL 3.2s ease-in-out infinite;
        }
        .sensor-float-r {
          animation: sensorFloatR 3.6s ease-in-out infinite -1.8s;
        }
        .sensor-pulse {
          transform-origin: 0 0;
          animation: sensorPulseWave 2.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
        .sensor-orbit-cw {
          transform-origin: 0 0;
          animation: sensorOrbitSpin 12s linear infinite;
        }
        .sensor-orbit-ccw {
          transform-origin: 0 0;
          animation: sensorOrbitSpinRev 12s linear infinite;
        }
        .sensor-theme-trans {
          transition: stroke 0.3s ease, fill 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      <svg width="100%" height="100%" viewBox="-20 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="armorWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f4f4f5" />
            <stop offset="70%" stopColor="#e4e4e7" />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>
          <linearGradient id="chromeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4d4d8" />
            <stop offset="25%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#a1a1aa" />
            <stop offset="75%" stopColor="#e4e4e7" />
            <stop offset="100%" stopColor="#52525b" />
          </linearGradient>
          <linearGradient id="carbonDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#27272a" />
          </radialGradient>
          <radialGradient id="sensorAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#e4e4e7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sensorActiveAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
          <filter id="sensorGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating Circular Sensor 1: Left Sensor (◉) */}
        <g
          style={{
            transform: `translate(${15 + sensorOffset.x * 0.9}px, ${115 + sensorOffset.y * 1.1}px)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          <g className="sensor-float-l">
            {/* Ambient soft glow aura */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r={15 + proximity * 3}
              fill={isOverDark ? (isNear ? "url(#sensorActiveAura)" : "url(#sensorAura)") : "rgba(14, 165, 233, 0.12)"}
              opacity={isOverDark ? (0.4 + proximity * 0.45) : (isNear ? 0.7 : 0.3)}
            />

            {/* Expanding pulse ping wave with increased thickness */}
            <circle
              className="sensor-pulse sensor-theme-trans"
              cx="0"
              cy="0"
              r="11"
              fill="none"
              stroke={pulseStroke}
              strokeWidth="1.8"
            />

            {/* Base disc backing for clean contrast */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="12.5"
              fill={isOverDark ? "rgba(9, 9, 11, 0.45)" : "rgba(255, 255, 255, 0.9)"}
            />

            {/* Outer segmented precision orbit ring with strong thickness (2.5px) */}
            <circle
              className="sensor-orbit-cw sensor-theme-trans"
              cx="0"
              cy="0"
              r="12.5"
              fill="none"
              stroke={orbitStroke}
              strokeWidth="2.5"
              strokeDasharray="16 4"
            />

            {/* Precision crosshair telemetry ticks with increased thickness (2px) */}
            <line className="sensor-theme-trans" x1="-16.5" y1="0" x2="-13.5" y2="0" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="13.5" y1="0" x2="16.5" y2="0" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="0" y1="-16.5" x2="0" y2="-13.5" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="0" y1="13.5" x2="0" y2="16.5" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />

            {/* Inner core frame with thickness (2px) */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="6.2"
              fill={innerFrameFill}
              stroke={innerFrameStroke}
              strokeWidth="2"
            />

            {/* Center sensor pupil / core (◉) */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="3.2"
              fill={pupilFill}
              filter={isOverDark ? "url(#sensorGlow)" : undefined}
            />
          </g>
        </g>

        {/* Floating Circular Sensor 2: Right Sensor (◉) */}
        <g
          style={{
            transform: `translate(${185 + sensorOffset.x * 1.1}px, ${115 + sensorOffset.y * 0.9}px)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          <g className="sensor-float-r">
            {/* Ambient soft glow aura */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r={15 + proximity * 3}
              fill={isOverDark ? (isNear ? "url(#sensorActiveAura)" : "url(#sensorAura)") : "rgba(14, 165, 233, 0.12)"}
              opacity={isOverDark ? (0.4 + proximity * 0.45) : (isNear ? 0.7 : 0.3)}
            />

            {/* Expanding pulse ping wave with increased thickness */}
            <circle
              className="sensor-pulse sensor-theme-trans"
              cx="0"
              cy="0"
              r="11"
              fill="none"
              stroke={pulseStroke}
              strokeWidth="1.8"
            />

            {/* Base disc backing for clean contrast */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="12.5"
              fill={isOverDark ? "rgba(9, 9, 11, 0.45)" : "rgba(255, 255, 255, 0.9)"}
            />

            {/* Outer segmented precision orbit ring with strong thickness (2.5px) */}
            <circle
              className="sensor-orbit-ccw sensor-theme-trans"
              cx="0"
              cy="0"
              r="12.5"
              fill="none"
              stroke={orbitStroke}
              strokeWidth="2.5"
              strokeDasharray="16 4"
            />

            {/* Precision crosshair telemetry ticks with increased thickness (2px) */}
            <line className="sensor-theme-trans" x1="-16.5" y1="0" x2="-13.5" y2="0" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="13.5" y1="0" x2="16.5" y2="0" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="0" y1="-16.5" x2="0" y2="-13.5" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />
            <line className="sensor-theme-trans" x1="0" y1="13.5" x2="0" y2="16.5" stroke={tickStroke} strokeWidth="2" strokeLinecap="round" />

            {/* Inner core frame with thickness (2px) */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="6.2"
              fill={innerFrameFill}
              stroke={innerFrameStroke}
              strokeWidth="2"
            />

            {/* Center sensor pupil / core (◉) */}
            <circle
              className="sensor-theme-trans"
              cx="0"
              cy="0"
              r="3.2"
              fill={pupilFill}
              filter={isOverDark ? "url(#sensorGlow)" : undefined}
            />
          </g>
        </g>

        {/* Torso/Chest */}
        <path d="M 50 150 L 150 150 L 135 250 L 65 250 Z" fill="url(#armorWhite)" stroke="#27272a" strokeWidth="2" />
        {/* Shoulder socket nodes */}
        <circle cx="53" cy="152" r="4.5" fill="url(#carbonDark)" stroke="#27272a" strokeWidth="1" />
        <circle cx="147" cy="152" r="4.5" fill="url(#carbonDark)" stroke="#27272a" strokeWidth="1" />

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

        {/* Core Power Ring */}
        <circle cx="100" cy="225" r="14" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
        <circle cx="100" cy="225" r="8" fill="#ffffff" />

        {/* Neck base hydraulic cylinders */}
        <rect x="90" y="125" width="20" height="25" fill="url(#carbonDark)" stroke="#27272a" strokeWidth="1" />
        <line x1="95" y1="125" x2="95" y2="150" stroke="url(#chromeSteel)" strokeWidth="1.5" />
        <line x1="105" y1="125" x2="105" y2="150" stroke="url(#chromeSteel)" strokeWidth="1.5" />

        {/* Dynamic Head Group (yaw & pitch rotation) */}
        <g
          style={{
            transform: `rotate(${headYaw * 0.9}deg) translateY(${headPitch * 0.8}px)`,
            transformOrigin: "100px 135px",
            transition: "transform 0.08s ease-out",
          }}
        >
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

          {/* Visor glowing eye */}
          {!isBlinking ? (
            <g
              style={{
                transform: `translate(${eyeOffset.x * 2.2}px, ${eyeOffset.y * 1.2}px)`,
                transition: "transform 0.06s ease-out",
              }}
            >
              <circle cx="100" cy="108" r="6" fill="url(#eyeGlow)" stroke="#ffffff" strokeWidth="1" />
              <circle cx="100" cy="108" r="2" fill="#ffffff" />
            </g>
          ) : (
            <line x1="94" y1="108" x2="106" y2="108" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          )}
        </g>
      </svg>
    </div>
  );
}

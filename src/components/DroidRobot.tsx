"use client";

import React, { useState, useEffect, useRef } from "react";

export default function DroidRobot() {
  const [headYaw, setHeadYaw] = useState(0);
  const [headPitch, setHeadPitch] = useState(0);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const droidRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={droidRef}
      className="bottom-right-droid"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        width: "190px",
        height: "250px",
        zIndex: 15,
        pointerEvents: "none",
        filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.06))",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </defs>

        {/* Robot Arms/Limbs Background layer */}
        <path d="M 30 180 C 15 210, 15 240, 25 270" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />
        <path d="M 170 180 C 185 210, 185 240, 175 270" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />

        {/* Torso/Chest */}
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

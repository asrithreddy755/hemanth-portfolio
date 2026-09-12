"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (interpolated for smoothness)
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    // Handle resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateGearPositions();
    };
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Gear definition
    interface Gear {
      x: number;
      y: number;
      radius: number;
      teeth: number;
      speed: number;
      angle: number;
      color: string;
    }

    const gears: Gear[] = [
      { x: 150, y: 250, radius: 80, teeth: 18, speed: 0.005, angle: 0, color: "rgba(0, 0, 0, 0.018)" },
      { x: 278, y: 250, radius: 50, teeth: 12, speed: -0.008, angle: 0.1, color: "rgba(0, 0, 0, 0.015)" },
      { x: 278, y: 154, radius: 46, teeth: 10, speed: 0.0087, angle: 0.3, color: "rgba(0, 0, 0, 0.012)" }
    ];

    const updateGearPositions = () => {
      if (gears.length >= 3) {
        gears[0].x = 150;
        gears[0].y = 250;
        gears[1].x = 278;
        gears[1].y = 250;
        gears[2].x = 278;
        gears[2].y = 154;
      }
    };

    // Floating particles (representing CFD flows)
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.2) * 0.8 + 0.3, // flow to the right
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    // Kinematic robotic arm parameters
    const arm = {
      baseX: width * 0.4,
      baseY: height,
      l1: 180, // segment 1 length
      l2: 140, // segment 2 length
      x1: width * 0.4,
      y1: height - 150,
      x2: width * 0.4,
      y2: height - 280,
    };

    // Draw 3D Perspective Grid (Dark/grey lines for light mode)
    const drawGrid = (ctx: CanvasRenderingContext2D) => {
      const centerX = width / 2 + (mouse.x - width / 2) * 0.05;
      const horizonY = height * 0.35 + (mouse.y - height / 2) * 0.03;

      ctx.save();
      ctx.strokeStyle = "rgba(9, 9, 11, 0.018)"; // soft grey grid
      ctx.lineWidth = 0.4;

      // Draw horizon line
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(width, horizonY);
      ctx.stroke();

      // Draw perspective longitudinal lines
      const numLongLines = 36;
      for (let i = 0; i <= numLongLines; i++) {
        const fraction = i / numLongLines;
        const bottomX = fraction * width * 2.5 - width * 0.75;
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      // Draw perspective latitudinal lines
      const numLatLines = 20;
      for (let i = 0; i < numLatLines; i++) {
        const t = i / numLatLines;
        const y = horizonY + Math.pow(t, 2.5) * (height - horizonY);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Radar circles
      ctx.strokeStyle = "rgba(0, 0, 0, 0.015)";
      for (let r = 100; r < Math.max(width, height); r += 160) {
        ctx.beginPath();
        ctx.arc(centerX, horizonY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Draw gear
    const drawGear = (ctx: CanvasRenderingContext2D, gear: Gear) => {
      ctx.save();
      ctx.translate(gear.x, gear.y);
      ctx.rotate(gear.angle);

      const toothDepth = 10;
      const innerRadius = gear.radius - toothDepth;
      const outerRadius = gear.radius + toothDepth;

      ctx.fillStyle = gear.color;
      ctx.strokeStyle = gear.color.replace("0.0", "0.04");
      ctx.lineWidth = 0.6;

      ctx.beginPath();
      for (let i = 0; i < gear.teeth; i++) {
        const angle = (Math.PI * 2 / gear.teeth) * i;
        const nextAngle = (Math.PI * 2 / gear.teeth) * (i + 1);

        ctx.lineTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius);
        ctx.lineTo(Math.cos(angle + 0.05) * outerRadius, Math.sin(angle + 0.05) * outerRadius);
        ctx.lineTo(Math.cos(nextAngle - 0.05) * outerRadius, Math.sin(nextAngle - 0.05) * outerRadius);
        ctx.lineTo(Math.cos(nextAngle) * innerRadius, Math.sin(nextAngle) * innerRadius);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.stroke();

      const spokes = 4;
      for (let i = 0; i < spokes; i++) {
        const sAngle = (Math.PI * 2 / spokes) * i;
        ctx.beginPath();
        ctx.moveTo(Math.cos(sAngle) * 16, Math.sin(sAngle) * 16);
        ctx.lineTo(Math.cos(sAngle) * innerRadius, Math.sin(sAngle) * innerRadius);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawLinkages = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = "rgba(0, 0, 0, 0.015)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(gears[0].x, gears[0].y);
      ctx.lineTo(gears[1].x, gears[1].y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(gears[1].x, gears[1].y);
      ctx.lineTo(gears[2].x, gears[2].y);
      ctx.stroke();

      ctx.fillStyle = "rgba(0, 0, 0, 0.035)";
      gears.forEach(g => {
        ctx.beginPath();
        ctx.arc(g.x, g.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const solveIK = () => {
      arm.baseX = width * 0.35;
      arm.baseY = height;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const dx = mouse.x - arm.baseX;
      const dy = mouse.y - arm.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const maxLength = arm.l1 + arm.l2 - 5;
      const targetX = dist > maxLength ? arm.baseX + (dx / dist) * maxLength : mouse.x;
      const targetY = dist > maxLength ? arm.baseY + (dy / dist) * maxLength : mouse.y;

      const finalDx = targetX - arm.baseX;
      const finalDy = targetY - arm.baseY;
      const finalDist = Math.sqrt(finalDx * finalDx + finalDy * finalDy);

      const alpha = Math.atan2(finalDy, finalDx);

      const cosAngle2 = (finalDist * finalDist - arm.l1 * arm.l1 - arm.l2 * arm.l2) / (2 * arm.l1 * arm.l2);
      const angle2 = Math.acos(Math.max(-1, Math.min(1, cosAngle2)));

      const cosAngle1 = (arm.l1 * arm.l1 + finalDist * finalDist - arm.l2 * arm.l2) / (2 * arm.l1 * finalDist);
      const angle1 = Math.acos(Math.max(-1, Math.min(1, cosAngle1)));

      const theta1 = alpha - angle1;

      arm.x1 = arm.baseX + Math.cos(theta1) * arm.l1;
      arm.y1 = arm.baseY + Math.sin(theta1) * arm.l1;

      arm.x2 = targetX;
      arm.y2 = targetY;
    };

    const drawRoboticArm = (ctx: CanvasRenderingContext2D) => {
      solveIK();

      ctx.save();

      ctx.strokeStyle = "rgba(0, 0, 0, 0.008)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(arm.baseX, arm.baseY, arm.l1 + arm.l2, 0, Math.PI * 2);
      ctx.stroke();

      // Shoulder to elbow
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(arm.baseX, arm.baseY);
      ctx.lineTo(arm.x1, arm.y1);
      ctx.stroke();

      // Elbow to wrist
      ctx.strokeStyle = "rgba(0, 0, 0, 0.035)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(arm.x1, arm.y1);
      ctx.lineTo(arm.x2, arm.y2);
      ctx.stroke();

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.strokeStyle = "rgba(0, 0, 0, 0.12)";
      ctx.lineWidth = 0.8;

      ctx.beginPath();
      ctx.arc(arm.baseX, arm.baseY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(arm.x1, arm.y1, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(arm.x2, arm.y2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 0.5;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(arm.x2, arm.y2);
      ctx.lineTo(mouse.targetX, mouse.targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > width) {
          p.x = 0;
          p.y = Math.random() * height;
        }
        if (p.y < 0 || p.y > height) {
          p.vy = -p.vy;
        }

        ctx.fillStyle = `rgba(0, 0, 0, ${p.alpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach(other => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / 80) * 0.012})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawGrid(ctx);

      gears.forEach(g => {
        g.angle += g.speed;
        drawGear(ctx, g);
      });

      drawLinkages(ctx);
      drawParticles(ctx);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-canvas-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
}

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

    // Mouse coordinates
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    // Handle resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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
      { x: 150, y: 250, radius: 80, teeth: 18, speed: 0.005, angle: 0, color: "rgba(6, 182, 212, 0.08)" },
      { x: 278, y: 250, radius: 50, teeth: 12, speed: -0.008, angle: 0.1, color: "rgba(245, 158, 11, 0.06)" },
      { x: 278, y: 154, radius: 46, teeth: 10, speed: 0.0087, angle: 0.3, color: "rgba(6, 182, 212, 0.06)" },
      { x: width - 200, y: height - 200, radius: 100, teeth: 24, speed: -0.003, angle: 0, color: "rgba(6, 182, 212, 0.07)" },
      { x: width - 338, y: height - 200, radius: 40, teeth: 10, speed: 0.0075, angle: 0.25, color: "rgba(245, 158, 11, 0.05)" }
    ];

    // Floating particles (representing CFD flows)
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 40 }, () => ({
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

    // Draw grid
    const drawGrid = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
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
      ctx.strokeStyle = gear.color.replace("0.0", "0.2");
      ctx.lineWidth = 1.5;

      // Draw gear body
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

      // Outer rim ring
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Center hole
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.stroke();

      // Spokes
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

    // Draw structural linkage beams
    const drawLinkages = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = "rgba(6, 182, 212, 0.06)";
      ctx.lineWidth = 4;
      
      // Connect Gear 1 and Gear 2
      ctx.beginPath();
      ctx.moveTo(gears[0].x, gears[0].y);
      ctx.lineTo(gears[1].x, gears[1].y);
      ctx.stroke();

      // Connect Gear 2 and Gear 3
      ctx.beginPath();
      ctx.moveTo(gears[1].x, gears[1].y);
      ctx.lineTo(gears[2].x, gears[2].y);
      ctx.stroke();

      // Draw pivot nodes at centers
      ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
      gears.forEach(g => {
        ctx.beginPath();
        ctx.arc(g.x, g.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Inverse Kinematics Solver for 2-segment robotic arm
    const solveIK = () => {
      arm.baseX = width * 0.35;
      arm.baseY = height;

      // Ease the arm toward the mouse pointer
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const dx = mouse.x - arm.baseX;
      const dy = mouse.y - arm.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Clamp distance to avoid hyperextension
      const maxLength = arm.l1 + arm.l2 - 5;
      const targetX = dist > maxLength ? arm.baseX + (dx / dist) * maxLength : mouse.x;
      const targetY = dist > maxLength ? arm.baseY + (dy / dist) * maxLength : mouse.y;

      const finalDx = targetX - arm.baseX;
      const finalDy = targetY - arm.baseY;
      const finalDist = Math.sqrt(finalDx * finalDx + finalDy * finalDy);

      // Angle from base to target
      const alpha = Math.atan2(finalDy, finalDx);

      // Law of Cosines to solve interior angles
      const cosAngle2 = (finalDist * finalDist - arm.l1 * arm.l1 - arm.l2 * arm.l2) / (2 * arm.l1 * arm.l2);
      const angle2 = Math.acos(Math.max(-1, Math.min(1, cosAngle2))); // Elbow angle

      const cosAngle1 = (arm.l1 * arm.l1 + finalDist * finalDist - arm.l2 * arm.l2) / (2 * arm.l1 * finalDist);
      const angle1 = Math.acos(Math.max(-1, Math.min(1, cosAngle1))); // Shoulder angle adjustment

      // Absolute joint angles
      const theta1 = alpha - angle1;
      
      // Calculate joint positions
      arm.x1 = arm.baseX + Math.cos(theta1) * arm.l1;
      arm.y1 = arm.baseY + Math.sin(theta1) * arm.l1;
      
      arm.x2 = targetX;
      arm.y2 = targetY;
    };

    // Draw robotic arm
    const drawRoboticArm = (ctx: CanvasRenderingContext2D) => {
      solveIK();

      ctx.save();
      
      // Draw grid range boundaries
      ctx.strokeStyle = "rgba(6, 182, 212, 0.02)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(arm.baseX, arm.baseY, arm.l1 + arm.l2, 0, Math.PI * 2);
      ctx.stroke();

      // Shoulder to elbow (Segment 1)
      ctx.strokeStyle = "rgba(6, 182, 212, 0.12)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(arm.baseX, arm.baseY);
      ctx.lineTo(arm.x1, arm.y1);
      ctx.stroke();

      // Elbow to wrist (Segment 2)
      ctx.strokeStyle = "rgba(245, 158, 11, 0.12)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(arm.x1, arm.y1);
      ctx.lineTo(arm.x2, arm.y2);
      ctx.stroke();

      // Draw Joints
      ctx.fillStyle = "rgba(6, 182, 212, 0.3)";
      ctx.strokeStyle = "rgba(6, 182, 212, 0.6)";
      ctx.lineWidth = 2;

      // Base joint
      ctx.beginPath();
      ctx.arc(arm.baseX, arm.baseY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Elbow joint
      ctx.fillStyle = "rgba(245, 158, 11, 0.3)";
      ctx.strokeStyle = "rgba(245, 158, 11, 0.6)";
      ctx.beginPath();
      ctx.arc(arm.x1, arm.y1, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Tool tip (Wrist/Effector)
      ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
      ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
      ctx.beginPath();
      ctx.arc(arm.x2, arm.y2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Laser guide line to pointer
      ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(arm.x2, arm.y2);
      ctx.lineTo(mouse.targetX, mouse.targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    // Draw floating particles (representing CFD flow)
    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      particles.forEach(p => {
        // Flow update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x > width) {
          p.x = 0;
          p.y = Math.random() * height;
        }
        if (p.y < 0 || p.y > height) {
          p.vy = -p.vy;
        }

        // Draw particle
        ctx.fillStyle = `rgba(103, 232, 249, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Trace vectors for close particles (Mesh effect)
        particles.forEach(other => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist/80) * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      ctx.restore();
    };

    // Main animation loop
    const animate = () => {
      ctx.fillStyle = "rgb(6, 9, 19)";
      ctx.fillRect(0, 0, width, height);

      // Draw background systems
      drawGrid(ctx);
      
      // Update and draw gears
      gears.forEach(g => {
        g.angle += g.speed;
        
        // Reposition gears if window dimensions change
        if (g.x > width && g.x < width + 500) {
          g.x = width - (window.innerWidth - g.x);
        }
        if (g.y > height && g.y < height + 500) {
          g.y = height - (window.innerHeight - g.y);
        }
        
        drawGear(ctx, g);
      });

      drawLinkages(ctx);
      drawParticles(ctx);
      drawRoboticArm(ctx);

      animationId = requestAnimationFrame(animate);
    };

    // Begin loop
    animate();

    // Cleanups
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

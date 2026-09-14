import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.5, 0.25]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    let particles: Particle[] = [];

    const colors = [
      "rgba(16, 185, 129, ", // Emerald
      "rgba(52, 211, 153, ", // Light emerald
      "rgba(6, 182, 212, ",  // Cyan
      "rgba(56, 189, 248, ", // Sky
    ];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxConnectDist = 120;
      const mouseMaxDist = 160;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap boundaries
        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        // Mouse influence
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p1.x;
          const dy = mouseRef.current.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseMaxDist) {
            const force = (1 - dist / mouseMaxDist) * 0.6;
            p1.x -= (dx / dist) * force;
            p1.y -= (dy / dist) * force;

            // Draw line to mouse
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - dist / mouseMaxDist) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha})`;
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const connectAlpha = (1 - dist / maxConnectDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${connectAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Base Dark Tech Background Gradient */}
      <div className="absolute inset-0 bg-[#06080d]" />

      {/* Atmospheric Ambient Light Pools */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-emerald-500/12 blur-[120px]" />
        <div className="absolute top-[28rem] -right-32 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-[60rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-600/8 blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-1/4 h-[35rem] w-[35rem] rounded-full bg-teal-500/10 blur-[150px]" />
      </motion.div>

      {/* Interactive Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-75"
      />

      {/* Subtle Cyber Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,8,13,0.6)_100%)]" />
    </div>
  );
}

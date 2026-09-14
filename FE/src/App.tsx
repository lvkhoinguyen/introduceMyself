import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TechBackground from "./components/TechBackground";
import { ArrowUp, Code2, Heart, Menu, Sparkles, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform, AnimatePresence } from "motion/react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY, scrollYProgress } = useScroll();
  const topBarScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 20);
  });

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Trang chủ" },
      { id: "about", label: "Giới thiệu" },
      { id: "projects", label: "Dự án" },
      { id: "skills", label: "Kỹ năng" },
      { id: "experience", label: "Hành trình" },
      { id: "contact", label: "Liên hệ" },
    ],
    [],
  );

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Animated Interactive Particle Canvas Background */}
      <TechBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top Scroll Indicator */}
        <motion.div
          className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
          style={{ scaleX: topBarScale }}
        />

        {/* Floating Island Navigation Dock */}
        <header
          className={`fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-300 ${
            scrolled ? "pt-3" : "pt-5"
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            {/* Brand Monogram */}
            <button
              onClick={() => handleNavClick("hero")}
              className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-slate-950/70 py-1.5 pl-2 pr-3.5 shadow-lg shadow-black/30 backdrop-blur-xl transition hover:border-emerald-500/40 hover:bg-slate-900/80"
              aria-label="Về đầu trang"
            >
              <div className="relative grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 shadow-sm transition group-hover:scale-105">
                <Code2 className="h-3.5 w-3.5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                  <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
              </div>
              <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                Nguyên<span className="text-emerald-400">.dev</span>
              </span>
            </button>

            {/* Desktop Navigation Capsule with Animated Pill */}
            <nav className="hidden items-center rounded-full border border-white/10 bg-slate-950/75 p-1.5 shadow-xl shadow-black/40 backdrop-blur-2xl md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                      isActive ? "text-slate-950 font-semibold" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Available Status & Quick Contact */}
            <div className="hidden items-center gap-3 sm:flex">
              <button
                onClick={() => handleNavClick("contact")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 to-teal-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl transition hover:border-emerald-400 hover:bg-emerald-400/20 hover:text-emerald-200"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>Sẵn sàng nhận việc</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur-xl transition hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-x-4 top-16 z-50 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
              >
                <div className="grid gap-1.5">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        activeSection === item.id
                          ? "bg-emerald-400 text-slate-950 font-semibold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && <Sparkles className="h-3.5 w-3.5" />}
                    </button>
                  ))}
                  <div className="my-1 h-px bg-white/10" />
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition active:scale-98"
                  >
                    <span>Liên hệ ngay</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* Polished Modern Footer */}
        <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:px-6">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <Code2 className="h-3.5 w-3.5" />
              </span>
              <span className="font-medium text-slate-300">Lê Võ Khôi Nguyên</span>
              <span className="text-slate-600">•</span>
              <span>Software Engineer Portfolio</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Được xây dựng với</span>
              <Heart className="h-3 w-3 fill-emerald-400 text-emerald-400" />
              <span>React, Motion & Tailwind CSS</span>
            </div>

            <button
              onClick={() => handleNavClick("hero")}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
            >
              <span>Lên đầu trang</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

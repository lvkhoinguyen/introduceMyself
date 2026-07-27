import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TechBackground from "./components/TechBackground";
import { ArrowUp, Code2, Heart, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY, scrollYProgress } = useScroll();
  const topBarScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 24);
  });

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.35, 0.5, 0.65] },
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
      { id: "experience", label: "Hành trình" },
      { id: "projects", label: "Dự án" },
      { id: "skills", label: "Kỹ năng" },
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
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_34%),linear-gradient(180deg,#071114_0%,#05070a_38%,#090d0f_100%)] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Animated Modern Tech Background */}
      <TechBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <motion.div
          className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-emerald-400"
          style={{ scaleX: topBarScale }}
        />

        <nav
          className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl transition hover:bg-white/10"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 text-slate-950">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
                Nguyên.dev
              </span>
            </button>

            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition ${
                    activeSection === item.id
                      ? "bg-emerald-400 text-slate-950"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick("contact")}
                className="rounded-full border border-emerald-400/30 bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Cộng tác ngay
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-emerald-400 text-slate-950"
                        : "bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick("contact")}
                  className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Cộng tác ngay
                </button>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-28 sm:pt-32">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="border-t border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-emerald-400" />
              <span>Lê Võ Khôi Nguyên © {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Thiết kế & phát triển với</span>
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
              <span>React, Motion và Tailwind</span>
            </div>
            <button
              onClick={() => handleNavClick("hero")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <span>Lên đầu trang</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

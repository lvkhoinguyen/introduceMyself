import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Menu, X, Code2, Heart, ArrowUp } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scrolling to apply glassmorphic styles & active navigation highlights
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for highlight
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Trang Chủ" },
    { id: "about", label: "Về Tôi" },
    { id: "experience", label: "Hành Trình" },
    { id: "projects", label: "Dự Án" },
    { id: "skills", label: "Kỹ Năng" },
    { id: "contact", label: "Liên Hệ" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* Sticky Glassmorphic Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 text-white font-display font-extrabold text-xl group cursor-pointer"
          >
            <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="tracking-tight">
              Nguyên<span className="text-emerald-400">.Dev</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-900/40 p-1.5 rounded-full border border-slate-900/60 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-medium rounded-full tracking-wide transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call-to-action button in header */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-semibold rounded-full transition-all cursor-pointer"
            >
              Cộng Tác Ngay
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 p-4 md:hidden shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-3 px-4 text-left text-sm rounded-xl transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold"
                      : "text-slate-400 hover:bg-slate-900/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 px-4 mt-2 bg-emerald-500 text-slate-950 font-bold rounded-xl text-center cursor-pointer text-sm"
              >
                Cộng Tác Ngay
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-slate-900 bg-black text-slate-500 text-xs">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400 font-display font-semibold">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Lê Võ Khôi Nguyên © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Thiết kế & phát triển với</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-1" />
            <span>sử dụng React & Tailwind CSS</span>
          </div>

          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer transition-all"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

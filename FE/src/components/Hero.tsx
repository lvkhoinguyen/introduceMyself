import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Code2, Sparkles, Database, Globe } from "lucide-react";
import axios from "axios";

export default function Hero() {
  const [profile, setProfile] = useState<{fullName: string, role: string, avatarUrl: string, githubUrl: string} | null>(null);

  useEffect(() => {
    // Gọi API từ Backend Spring Boot
    axios.get("http://localhost:8080/api/profile")
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi lấy thông tin từ backend:", error);
      });
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-slate-900 via-slate-950 to-black text-white"
    >
      {/* Dynamic Glowing Blobs for Background Depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl" />

      {/* Floating Decorative Tech Tags */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center gap-2 shadow-2xl text-emerald-400"
        >
          <Database className="w-4 h-4" />
          <span className="text-xs font-mono">Spring Boot</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center gap-2 shadow-2xl text-blue-400"
        >
          <Code2 className="w-4 h-4" />
          <span className="text-xs font-mono">React & Tailwind</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center gap-2 shadow-2xl text-indigo-400"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-mono">Docker & Railway</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Top Tagline with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Sẵn sàng cho các thử thách Full-stack</span>
        </motion.div>

        {/* Main Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          {profile?.fullName || "Lê Võ Khôi Nguyên"}
        </motion.h1>

        {/* Secondary Title & Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-sans mb-10"
        >
          {profile?.role || "Sinh viên năm cuối ngành CNTT tại Đại học Công nghiệp Hà Nội (HaUI) – Đam mê phát triển phần mềm và xây dựng hệ thống."}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* View Projects Button */}
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Xem Dự Án</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Download CV Button */}
          <a
            href="/CV.pdf"
            download="CV_LeVoKhoiNguyen.pdf"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Tải CV</span>
          </a>

          {/* Github Button */}
          {profile?.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
        </motion.div>
      </div>

      {/* Aesthetic bottom transition wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Code2, Copy, Download, ExternalLink, FileText, Github, Play, Sparkles, Terminal, User } from "lucide-react";
import axios from "axios";
import type { Profile } from "../types/portfolio";

const roles = [
  "Backend Developer (Spring Boot)",
  "Full-Stack Web Engineer",
  "Cloud & System Enthusiast",
  "Sinh viên năm cuối CNTT - HaUI",
];

const metrics = [
  { value: "05+", label: "Dự án thực tế" },
  { value: "Spring", label: "Backend cốt lõi" },
  { value: "React", label: "Frontend hiện đại" },
];

export default function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("profile");
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Cycling roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Fetch profile
  useEffect(() => {
    let alive = true;
    axios
      .get("/api/profile")
      .then((response) => {
        if (alive && response.data) setProfile(response.data);
      })
      .catch((error) => {
        console.warn("Dùng fallback profile nội bộ:", error.message);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRunCode = () => {
    setTerminalOutput("Connecting to /api/v1/engineer/status...");
    setTimeout(() => {
      setTerminalOutput(
        JSON.stringify(
          {
            statusCode: 200,
            status: "SUCCESS",
            candidate: "Lê Võ Khôi Nguyên",
            university: "HaUI (Đại học Công nghiệp Hà Nội)",
            major: "Công nghệ thông tin",
            availableForHire: true,
            coreStack: ["Java 17+", "Spring Boot", "React", "Docker", "MySQL"],
            message: "Rất vui được kết nối và cộng tác cùng bạn!",
          },
          null,
          2,
        ),
      );
    }, 450);
  };

  const sampleJavaCode = `// Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/engineer")
public class PortfolioController {

  @GetMapping("/status")
  public ResponseEntity<Map<String, Object>> getProfile() {
    return ResponseEntity.ok(Map.of(
      "name", "Lê Võ Khôi Nguyên",
      "role", "Software Engineer",
      "status", "Available for Hire"
    ));
  }
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(sampleJavaCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Hero Copy & Actions */}
        <div className="relative z-10 flex flex-col justify-center">
          {/* Status Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span>Sinh viên năm cuối CNTT • HaUI</span>
          </motion.div>

          {/* Large Display Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {loading ? "Đang tải hồ sơ..." : profile?.fullName || "Lê Võ Khôi Nguyên"}
          </motion.h1>

          {/* Dynamic Cycling Role Line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 flex items-center gap-2 text-xl font-semibold sm:text-2xl text-emerald-400"
          >
            <Terminal className="h-5 w-5 shrink-0 text-emerald-400" />
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block font-mono text-lg font-semibold sm:text-xl text-slate-200"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {profile?.role ||
              "Đam mê xây dựng hệ thống backend hiệu năng cao với Spring Boot, RESTful API chuẩn mực và giao diện web hiện đại với React."}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-105 hover:shadow-emerald-500/30 active:scale-95"
            >
              <span>Khám phá dự án</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            <a
              href="/CV.pdf"
              download="CV_LeVoKhoiNguyen.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 active:scale-95"
            >
              <Download className="h-4 w-4 text-emerald-400" />
              <span>Tải CV</span>
            </a>

            <a
              href={profile?.githubUrl || "https://github.com/lvkhoinguyen"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 grid grid-cols-3 gap-3"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="group rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 backdrop-blur-md transition hover:border-emerald-500/30 hover:bg-slate-900/60"
              >
                <div className="font-mono text-2xl font-bold text-white transition group-hover:text-emerald-400">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: High-End Interactive Cyber Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-2xl -z-10 opacity-70" />

          {/* Main Showcase Container */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-2xl">
            {/* Header with Switcher Tabs & Mac Dots */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  {activeTab === "profile" ? "dev.profile.json" : "PortfolioController.java"}
                </span>
              </div>

              {/* Mode Switcher */}
              <div className="flex items-center rounded-lg bg-black/40 p-0.5 text-xs">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    activeTab === "profile"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <User className="h-3 w-3" />
                  <span>Hồ sơ</span>
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    activeTab === "terminal"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Code2 className="h-3 w-3" />
                  <span>Code API</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              {activeTab === "profile" ? (
                /* Tab 1: Refined Profile View */
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    {/* Art-Directed Avatar with Biometric Frame */}
                    <div className="relative shrink-0">
                      <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-emerald-400/40 p-0.5 shadow-lg shadow-emerald-500/20">
                        <img
                          src={profile?.avatarUrl || "/avatar.jpg"}
                          alt="Lê Võ Khôi Nguyên"
                          className="h-full w-full rounded-[14px] object-cover filter contrast-105"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-slate-900 border border-emerald-400 text-emerald-400">
                        <Sparkles className="h-2.5 w-2.5" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">Lê Võ Khôi Nguyên</h3>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/20">
                          VERIFIED
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Khoa CNTT - ĐH Công nghiệp Hà Nội</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-300 font-medium">Sẵn sàng nhận cơ hội việc làm</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                      <span className="text-slate-500 block text-[11px]">Chuyên ngành</span>
                      <span className="font-semibold text-slate-200 mt-0.5 block">Kỹ thuật phần mềm</span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                      <span className="text-slate-500 block text-[11px]">Tốt nghiệp dự kiến</span>
                      <span className="font-semibold text-emerald-300 mt-0.5 block">Năm 2026</span>
                    </div>
                  </div>

                  {/* Core Stack Pills */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Công nghệ trọng tâm
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Java", "Spring Boot", "REST API", "React", "Docker", "MySQL", "Git"].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action / Contact Trigger */}
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-emerald-200">Tìm kiếm vị trí Junior / Fresher</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Backend Java hoặc Full-Stack Web</p>
                    </div>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="rounded-lg bg-emerald-400 px-3 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-300"
                    >
                      Kết nối
                    </button>
                  </div>
                </div>
              ) : (
                /* Tab 2: Live Code Terminal */
                <div className="space-y-4">
                  <div className="relative">
                    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950 p-3.5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>
                        <span className="text-slate-500">{"// Spring Boot Controller"}</span>{"\n"}
                        <span className="text-emerald-400">@RestController</span>{"\n"}
                        <span className="text-emerald-400">@RequestMapping</span>(<span className="text-cyan-300">"/api/v1/engineer"</span>){"\n"}
                        <span className="text-purple-400">public class</span> <span className="text-yellow-300">PortfolioController</span> {"{"}{"\n"}
                        {"  "}<span className="text-emerald-400">@GetMapping</span>(<span className="text-cyan-300">"/status"</span>){"\n"}
                        {"  "}<span className="text-purple-400">public</span> ResponseEntity&lt;Profile&gt; <span className="text-blue-300">getStatus</span>() {"{"}{"\n"}
                        {"    "}<span className="text-purple-400">return</span> ResponseEntity.ok({"{\n"}
                        {"      "}<span className="text-slate-400">"engineer"</span>: <span className="text-cyan-300">"Khôi Nguyên"</span>,{"\n"}
                        {"      "}<span className="text-slate-400">"available"</span>: <span className="text-emerald-400">true</span>{"\n"}
                        {"    }"});{"\n"}
                        {"  }"}{"\n"}
                        {"}"}
                      </code>
                    </pre>

                    <button
                      onClick={copyCodeToClipboard}
                      className="absolute right-2.5 top-2.5 rounded-md border border-white/10 bg-slate-900/80 p-1.5 text-slate-400 hover:text-white"
                      title="Sao chép mã"
                    >
                      {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Terminal Execution Trigger */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={handleRunCode}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md transition hover:opacity-90 active:scale-95"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Thực thi Endpoint</span>
                    </button>
                    <span className="font-mono text-[10px] text-slate-500">GET /api/v1/engineer/status</span>
                  </div>

                  {/* Simulated Output Window */}
                  {terminalOutput && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-emerald-500/20 bg-black/80 p-3 font-mono text-[11px] text-emerald-300"
                    >
                      <pre className="overflow-x-auto whitespace-pre-wrap">{terminalOutput}</pre>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Floating Micro-Motion Badges */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-slate-950/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-xl"
          >
            <span className="grid h-5 w-5 place-items-center rounded-md bg-emerald-500/20 text-emerald-400">
              ⚡
            </span>
            <span>Spring Boot + React</span>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-slate-950/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-xl"
          >
            <span className="grid h-5 w-5 place-items-center rounded-md bg-cyan-500/20 text-cyan-400">
              🐳
            </span>
            <span>Docker Ready</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

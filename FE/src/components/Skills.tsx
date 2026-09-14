import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cloud, Cpu, Database, Layout, Server, ShieldCheck, Terminal, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  category: "backend" | "frontend" | "devops" | "ai";
  levelBadge: "Thành thạo" | "Nâng cao" | "Thực chiến";
  highlight?: boolean;
}

const skillList: SkillItem[] = [
  // Backend
  { name: "Java (17+)", category: "backend", levelBadge: "Thành thạo", highlight: true },
  { name: "Spring Boot", category: "backend", levelBadge: "Thành thạo", highlight: true },
  { name: "Spring Security & JWT", category: "backend", levelBadge: "Nâng cao" },
  { name: "RESTful API Design", category: "backend", levelBadge: "Thành thạo", highlight: true },
  { name: "Hibernate / Spring Data JPA", category: "backend", levelBadge: "Thành thạo" },
  { name: "VNPay Payment Integration", category: "backend", levelBadge: "Thực chiến" },

  // Frontend
  { name: "React 19", category: "frontend", levelBadge: "Thành thạo", highlight: true },
  { name: "TypeScript", category: "frontend", levelBadge: "Nâng cao" },
  { name: "Tailwind CSS v4", category: "frontend", levelBadge: "Thành thạo", highlight: true },
  { name: "Framer Motion (Animations)", category: "frontend", levelBadge: "Nâng cao" },
  { name: "Single Page App (SPA)", category: "frontend", levelBadge: "Thành thạo" },

  // Database & DevOps
  { name: "MySQL / Relational DB", category: "devops", levelBadge: "Thành thạo", highlight: true },
  { name: "Docker & Docker Compose", category: "devops", levelBadge: "Thực chiến", highlight: true },
  { name: "Git & GitHub Workflow", category: "devops", levelBadge: "Thành thạo" },
  { name: "Railway & Vercel Cloud", category: "devops", levelBadge: "Thực chiến" },
  { name: "Postman API Testing", category: "devops", levelBadge: "Thành thạo" },

  // AI & Data
  { name: "Python", category: "ai", levelBadge: "Nâng cao" },
  { name: "YOLOv8 / Object Detection", category: "ai", levelBadge: "Thực chiến" },
  { name: "FastAPI", category: "ai", levelBadge: "Nâng cao" },
  { name: "Convolutional Neural Network (CNN)", category: "ai", levelBadge: "Thực chiến" },
];

const categoryTabs = [
  { id: "all", label: "Tất cả công nghệ", icon: Cpu },
  { id: "backend", label: "Backend & API", icon: Server },
  { id: "frontend", label: "Frontend & UI", icon: Layout },
  { id: "devops", label: "Cơ sở dữ liệu & DevOps", icon: Database },
  { id: "ai", label: "AI & Computer Vision", icon: Terminal },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSkills = useMemo(() => {
    if (activeTab === "all") return skillList;
    return skillList.filter((s) => s.category === activeTab);
  }, [activeTab]);

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            <span>Năng lực công nghệ</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Bộ công cụ & công nghệ mình sử dụng để phát triển sản phẩm.
          </h2>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-emerald-400 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "border border-white/10 bg-slate-950/60 text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`group flex items-center justify-between rounded-2xl border p-4 backdrop-blur-xl transition-all hover:-translate-y-0.5 ${
                  skill.highlight
                    ? "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-400/50 hover:bg-emerald-500/10"
                    : "border-white/10 bg-slate-950/60 hover:border-white/20 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-xl text-xs font-mono font-bold ${
                      skill.category === "backend"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : skill.category === "frontend"
                        ? "bg-cyan-500/15 text-cyan-400"
                        : skill.category === "devops"
                        ? "bg-blue-500/15 text-blue-400"
                        : "bg-purple-500/15 text-purple-400"
                    }`}
                  >
                    #
                  </div>
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                </div>

                <span
                  className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    skill.levelBadge === "Thành thạo"
                      ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
                      : skill.levelBadge === "Nâng cao"
                      ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/30"
                      : "bg-purple-400/15 text-purple-300 border border-purple-400/30"
                  }`}
                >
                  {skill.levelBadge}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Core Architecture Principles Banner */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-400/20 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Kiến trúc & Tiêu chuẩn phát triển</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed max-w-2xl">
                  Luôn áp dụng mô hình 3 tầng (Controller - Service - Repository), chuẩn hóa mã lỗi phản hồi (HTTP Status Codes), validate dữ liệu đầu vào và viết code có chú thích rõ ràng.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-300">
              <span>Clean Architecture</span>
              <span>•</span>
              <span>RESTful APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

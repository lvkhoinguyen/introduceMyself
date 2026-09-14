import { useEffect, useState, useRef, type MouseEvent, type ReactNode } from "react";
import type React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Bot, CreditCard, ExternalLink, FileText, FolderGit2, Github, Layers, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import axios from "axios";
import type { Project } from "../types/portfolio";

const fallbackProjects: Project[] = [
  {
    title: "ShoppingWeb Full-Stack",
    description:
      "Nền tảng thương mại điện tử hoàn chỉnh với backend Spring Boot REST API, tích hợp thanh toán VNPay thực tế, chatbot AI tư vấn bán hàng và quản trị đơn hàng phân quyền.",
    tags: ["Spring Boot", "React", "VNPay", "Chatbot AI", "Docker", "MySQL"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/lvkhoinguyen",
    demoUrl: "https://github.com/lvkhoinguyen",
  },
  {
    title: "IDP.DMS - Enterprise Document Management",
    description:
      "Hệ thống quản lý và xử lý tài liệu số thông minh cho doanh nghiệp. Hỗ trợ phân loại dữ liệu, phân quyền bảo mật nhiều cấp và trích xuất thông tin nhanh chóng.",
    tags: ["C# .NET", "Python", "React", "Docker", "REST API"],
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    githubUrl: "https://github.com/lvkhoinguyen",
  },
  {
    title: "Real-time Vehicle Detection",
    description:
      "Pipeline nhận diện và phân loại phương tiện giao thông thời gian thực sử dụng mô hình YOLOv8 tối ưu với ONNX Runtime và đóng gói dịch vụ qua FastAPI.",
    tags: ["Python", "YOLOv8", "FastAPI", "ONNX"],
    accent: "from-purple-500/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/lvkhoinguyen",
  },
  {
    title: "Handwriting Character Recognition",
    description:
      "Mô hình học sâu CNN nhận dạng ký tự viết tay. Tập trung vào tiền xử lý ảnh (bình thường hóa, lọc nhiễu) và tối ưu độ chính xác phân loại.",
    tags: ["Python", "CNN", "Deep Learning", "NumPy"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    githubUrl: "https://github.com/lvkhoinguyen",
  },
  {
    title: "Interactive Developer Portfolio",
    description:
      "Portfolio cá nhân SPA phong cách Modern Dark Tech với nền hạt Canvas tương tác theo chuột, code terminal giả lập và hệ thống bento grid tối ưu hiển thị.",
    tags: ["React 19", "Motion", "Tailwind v4", "TypeScript"],
    accent: "from-emerald-500/15 via-slate-500/10 to-transparent",
    githubUrl: "https://github.com/lvkhoinguyen",
  },
];

// Interactive Spotlight Card Component
function SpotlightCard({
  project,
  index,
  isFeatured = false,
}: {
  project: Project;
  index: number;
  isFeatured?: boolean;
  key?: React.Key;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* Top metadata row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
                {project.title.includes("Shopping") ? (
                  <CreditCard className="h-4 w-4" />
                ) : project.title.includes("IDP") ? (
                  <FileText className="h-4 w-4" />
                ) : project.title.includes("Detection") ? (
                  <Layers className="h-4 w-4" />
                ) : (
                  <Terminal className="h-4 w-4" />
                )}
              </span>
              {isFeatured && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  Dự án nổi bật
                </span>
              )}
            </div>

            <span className="font-mono text-xs font-semibold text-slate-500">0{index + 1}</span>
          </div>

          {/* Project Title & Description */}
          <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

          {/* Special Feature Pills for ShoppingWeb */}
          {project.title.includes("ShoppingWeb") && (
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-200">
                <CreditCard className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="font-medium">Thanh toán VNPay</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-cyan-200">
                <Bot className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                <span className="font-medium">Chatbot AI Tư vấn</span>
              </div>
            </div>
          )}

          {/* Special Pipeline Pills for IDP.DMS */}
          {project.title.includes("IDP.DMS") && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-xs text-cyan-200">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
              <span>Phân quyền tài liệu nhiều cấp & Lưu trữ bảo mật</span>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
          <a
            href={project.githubUrl || "https://github.com/lvkhoinguyen"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 transition hover:text-emerald-200 group-hover:underline"
          >
            <span>Chi tiết dự án</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
                title="GitHub Repository"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    let alive = true;
    axios
      .get("/api/projects")
      .then((res) => {
        if (alive && Array.isArray(res.data) && res.data.length > 0) {
          setProjects(res.data);
        }
      })
      .catch((err) => {
        console.warn("Dùng fallback danh sách dự án:", err.message);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Dự án tiêu biểu</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Các sản phẩm và hệ thống mình đã trực tiếp thiết kế & xây dựng.
            </h2>
          </div>

          <a
            href="https://github.com/lvkhoinguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-emerald-400"
          >
            <span>Xem tất cả trên GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              project={project}
              index={index}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

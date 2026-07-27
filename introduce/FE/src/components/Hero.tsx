import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Github, Sparkles } from "lucide-react";
import axios from "axios";

type Profile = {
  fullName?: string;
  role?: string;
  avatarUrl?: string;
  githubUrl?: string;
};

const metrics = [
  { value: "05+", label: "dự án đã làm" },
  { value: "Spring", label: "backend sử dụng" },
  { value: "React", label: "frontend sử dụng" },
];

export default function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    axios
      .get("/api/profile")
      .then((response) => {
        if (alive) setProfile(response.data);
      })
      .catch((error) => {
        console.error("Không lấy được profile từ backend:", error);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
          >
            <Sparkles className="h-4 w-4" />
            <span>Portfolio cá nhân</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {loading ? "Đang tải hồ sơ..." : profile?.fullName || "Lê Võ Khôi Nguyên"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {profile?.role ||
              "Mình là sinh viên năm cuối ngành Công nghệ thông tin tại HaUI, yêu thích phát triển web full-stack và xây dựng sản phẩm có giao diện rõ ràng, dễ dùng."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Xem dự án
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/CV.pdf"
              download="CV_LeVoKhoiNguyen.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Tải CV
            </a>
            {profile?.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <div className="grid gap-4 md:grid-cols-[1fr_1.15fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
                <img
                  src={profile?.avatarUrl || "/avatar.jpg"}
                  alt="Ảnh đại diện"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Hiện tại</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">Đang tìm cơ hội làm việc chính thức</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Mình mong muốn được tham gia môi trường làm việc chuyên nghiệp để phát triển lâu dài về sản phẩm, hệ thống và quy trình triển khai.
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                    Có thể làm việc với Java Spring Boot, React, MySQL và các công cụ triển khai cơ bản như Docker, Vercel, Railway.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    Mục tiêu của mình là trở thành một kỹ sư phần mềm có nền tảng tốt và tư duy làm sản phẩm lâu dài.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

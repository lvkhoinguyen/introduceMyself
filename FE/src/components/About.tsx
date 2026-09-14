import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Code2, Compass, Cpu, Layers, Sparkles } from "lucide-react";
import axios from "axios";
import type { Profile } from "../types/portfolio";

const fallbackPoints = [
  "Ưu tiên mã nguồn sạch, kiến trúc mô-đun rõ ràng và dễ mở rộng.",
  "Thiết kế RESTful API chuẩn mực, xử lý ngoại lệ chặt chẽ và an toàn dữ liệu.",
  "Chú trọng trải nghiệm người dùng với giao diện tối ưu, nhịp thở layout hợp lý.",
  "Chủ động học hỏi công nghệ mới và tiếp cận quy trình triển khai hiện đại.",
];

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let alive = true;
    axios
      .get("/api/profile")
      .then((res) => {
        if (alive && res.data) setProfile(res.data);
      })
      .catch((err) => {
        console.warn("Không lấy được dữ liệu About từ API:", err.message);
      });

    return () => {
      alive = false;
    };
  }, []);

  const displayPoints = profile?.points && profile.points.length > 0 ? profile.points : fallbackPoints;
  const displayBio =
    profile?.bio ||
    "Mình là sinh viên năm cuối ngành Công nghệ thông tin tại Trường Đại học Công nghiệp Hà Nội (HaUI). Mình định hướng phát triển chuyên sâu về Backend với hệ sinh thái Java Spring Boot, đồng thời có kinh nghiệm xây dựng giao diện hiện đại với React và TypeScript.";

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Giới thiệu bản thân</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tư duy phát triển sản phẩm bền vững & hướng tới giá trị thực tế.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Bento Card 1: Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl backdrop-blur-xl md:col-span-7"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition duration-500 group-hover:bg-emerald-500/20" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Hành trình & Mục tiêu</h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  {displayBio}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Đối với mình, một hệ thống tốt không chỉ chạy đúng yêu cầu chức năng mà còn phải có khả năng mở rộng, cấu trúc mạch lạc, dễ bảo trì và mang lại trải nghiệm mượt mà cho người dùng cuối.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <span className="font-mono text-xs font-semibold text-emerald-400 block">ĐẠI HỌC</span>
                  <span className="text-sm font-medium text-slate-200 mt-1 block">ĐH Công nghiệp Hà Nội</span>
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-cyan-400 block">CHUYÊN NGHÀNH</span>
                  <span className="text-sm font-medium text-slate-200 mt-1 block">Công nghệ thông tin</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Core Philosophy Principles (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl backdrop-blur-xl md:col-span-5 flex flex-col justify-between"
          >
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Nguyên tắc làm việc</h3>
              </div>

              <div className="mt-6 space-y-3.5">
                {displayPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 transition hover:border-emerald-500/20 hover:bg-white/[0.04]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <p className="text-xs leading-relaxed text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs">
              <span className="text-slate-400">Cam kết chất lượng:</span>
              <span className="font-mono font-semibold text-emerald-400">Clean Code & High Performance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

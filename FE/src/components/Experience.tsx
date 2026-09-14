import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Award, Briefcase, Calendar, GraduationCap, Milestone, Sparkles } from "lucide-react";
import axios from "axios";
import type { Experience } from "../types/portfolio";

const fallbackExperiences: Experience[] = [
  {
    iconType: "graduation",
    title: "Sinh viên năm cuối ngành Công nghệ thông tin",
    meta: "Trường Đại học Công nghiệp Hà Nội (HaUI)",
    period: "2022 - 2026 (Hiện tại)",
    description:
      "Tích lũy nền tảng vững chắc về Cấu trúc dữ liệu & Giải thuật, Hệ quản trị CSDL, Lập trình hướng đối tượng (OOP) và Mạng máy tính. Tập trung chuyên sâu vào Java, Spring Boot và phát triển ứng dụng web hiện đại.",
  },
  {
    iconType: "briefcase",
    title: "Triển khai Hệ sinh thái ShoppingWeb Full-Stack",
    meta: "Đồ án chuyên ngành & Thực hành phát triển",
    period: "2025",
    description:
      "Thiết kế kiến trúc hệ thống thương mại điện tử với Spring Boot REST API, tích hợp cổng thanh toán trực tuyến VNPay Sandbox, xây dựng chatbot AI thông minh và đóng gói toàn bộ dịch vụ bằng Docker.",
  },
  {
    iconType: "briefcase",
    title: "Hệ thống quản lý tài liệu số doanh nghiệp (IDP.DMS)",
    meta: "Dự án phát triển ứng dụng",
    period: "2024 - 2025",
    description:
      "Xây dựng hệ thống số hóa văn bản với C# .NET và Python backend, giao diện quản trị React, triển khai cơ chế phân quyền bảo mật nhiều cấp độ và tối ưu tốc độ tìm kiếm tài liệu.",
  },
  {
    iconType: "award",
    title: "Nghiên cứu công nghệ mới & Tối ưu hóa vận hành",
    meta: "Học hỏi & Nâng cao kỹ năng liên tục",
    period: "Liên tục cập nhật",
    description:
      "Tự đào sâu kiến thức về Docker Compose, triển khai ứng dụng trên Railway & Vercel, tiếp cận mô hình Microservices và các kỹ thuật tối ưu hóa truy vấn cơ sở dữ liệu.",
  },
];

function getExperienceIcon(iconType?: string) {
  switch (iconType?.toLowerCase()) {
    case "graduation":
      return GraduationCap;
    case "briefcase":
      return Briefcase;
    case "award":
      return Award;
    default:
      return Milestone;
  }
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>(fallbackExperiences);

  useEffect(() => {
    let alive = true;
    axios
      .get("/api/experiences")
      .then((res) => {
        if (alive && Array.isArray(res.data) && res.data.length > 0) {
          setExperiences(res.data);
        }
      })
      .catch((err) => {
        console.warn("Dùng fallback danh sách hành trình:", err.message);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Milestone className="h-3.5 w-3.5 text-emerald-400" />
            <span>Hành trình phát triển</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Quá trình rèn luyện, học tập và triển khai dự án thực tế.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Rail */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-500/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((item, index) => {
              const Icon = getExperienceIcon(item.iconType);

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Pulse Node */}
                  <div className="absolute left-2 sm:left-6 top-1.5 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-2 border-emerald-400 bg-slate-950 shadow-[0_0_12px_rgba(52,211,153,0.6)]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  {/* Content Card */}
                  <div className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 sm:p-7">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white transition group-hover:text-emerald-300">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">{item.meta}</p>
                        </div>
                      </div>

                      <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-emerald-300">
                        <Calendar className="h-3 w-3 text-emerald-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

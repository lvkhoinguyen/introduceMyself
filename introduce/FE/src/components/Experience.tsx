import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Sinh viên năm cuối ngành CNTT",
    meta: "Đại học Công nghiệp Hà Nội",
    period: "2022 - hiện tại",
    description:
      "Học các nền tảng cốt lõi như cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu và kiến trúc phần mềm. Đồng thời tập trung vào Spring Boot và hệ sinh thái React.",
  },
  {
    icon: Briefcase,
    title: "Phát triển hệ thống ShoppingWeb",
    meta: "Đồ án chuyên ngành & thực hành",
    period: "2025",
    description:
      "Thiết kế và triển khai hệ thống thương mại điện tử với API rõ ràng, thanh toán VNPay và chatbot hỗ trợ người dùng.",
  },
  {
    icon: Award,
    title: "Xây dựng dự án cá nhân & triển khai",
    meta: "Học hỏi liên tục",
    period: "Liên tục",
    description:
      "Tự nghiên cứu Docker, Railway, Vercel và quy trình triển khai cơ bản để sản phẩm chạy ổn định hơn.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Hành trình</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quá trình học tập và làm dự án của mình.
          </h2>
        </div>

        <div className="relative grid gap-6">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/70 via-white/10 to-transparent md:block" />
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 pl-6 backdrop-blur-xl md:ml-12 md:p-8"
              >
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{experience.meta}</p>
                    </div>
                  </div>
                  <div className="inline-flex w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                    {experience.period}
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-slate-300">{experience.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

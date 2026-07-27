import { motion } from "motion/react";
import { CheckCircle2, Sparkles } from "lucide-react";

const points = [
  "Ưu tiên mã nguồn sạch và dễ mở rộng.",
  "Thiết kế giao diện có nhịp, có khoảng thở, không phẳng lì.",
  "Tập trung sản phẩm web mang cảm giác hiện đại và đáng tin.",
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            Về tôi
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Mình định hướng phát triển theo con đường kỹ sư phần mềm.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            Mình là sinh viên năm cuối CNTT tại HaUI, quan tâm đến cả backend lẫn frontend.
            Khi làm dự án, mình thường chú ý đến cấu trúc code, hiệu năng và trải nghiệm sử dụng thực tế.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur-xl"
        >
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Một vài điểm về mình</h3>
          <div className="mt-6 grid gap-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

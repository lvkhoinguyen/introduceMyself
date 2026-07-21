import { motion } from "motion/react";
import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span>Về Tôi</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Mục tiêu phát triển sự nghiệp
          </h2>

          <div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-lg font-sans max-w-3xl">
            <p>
              Mình là sinh viên năm cuối chuyên ngành Khoa học máy tính tại HaUI. Ước mơ của mình là trở thành một <strong className="text-emerald-400 font-semibold">Kỹ sư phần mềm</strong>, mình luôn tập trung vào việc viết mã nguồn sạch, tối ưu hiệu năng hệ thống và thiết kế kiến trúc bền vững.
            </p>
            <p>
              {/* Đối với mình, lập trình không chỉ là công việc mà còn là để  giải quyết các bài toán phức tạp bằng tư duy logic với những dòng code. */}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

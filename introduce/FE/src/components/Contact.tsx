import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2.25rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-white/5 to-slate-950/80 p-8 backdrop-blur-2xl sm:p-10"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Liên hệ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Nếu bạn muốn trao đổi về công việc hoặc dự án, hãy liên hệ với mình.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Mình luôn sẵn sàng trao đổi về cơ hội làm việc, vị trí phát triển web full-stack hoặc các dự án có thể cộng tác lâu dài.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:levokhoinguyen.it@gmail.com"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/55 p-5 text-white transition hover:-translate-y-0.5 hover:bg-slate-950/75"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Email</span>
                <span className="block text-base font-medium">levokhoinguyen.it@gmail.com</span>
              </span>
            </a>

            <a
              href="tel:0976104708"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/55 p-5 text-white transition hover:-translate-y-0.5 hover:bg-slate-950/75"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Điện thoại</span>
                <span className="block text-base font-medium">0976104708</span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/lvkhoinguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%AA-v%C3%B5-kh%C3%B4i-nguy%C3%AAn-21407a2a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { Mail, Github, Linkedin, Compass } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="flex flex-col items-center space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Liên Hệ</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Kết nối với tôi</h2>

          <p className="text-slate-400 leading-relaxed font-sans text-sm md:text-base max-w-lg text-center">
            Nếu nhà tuyển dụng đang tìm kiếm một lập trình viên Full-stack đầy nhiệt huyết, xin hãy liên hệ với tôi qua số điện thoại hoặc email dưới đây.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
            <div className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 hover:bg-slate-900/80 transition-colors rounded-2xl border border-slate-800/80 w-full sm:w-1/2 shadow-xl shadow-black/20">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-[11px] text-slate-500 font-mono text-center uppercase tracking-widest">Email Cá Nhân</h4>
                <p className="text-sm md:text-base font-semibold text-white text-center mt-1.5">levokhoinguyen.it@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 hover:bg-slate-900/80 transition-colors rounded-2xl border border-slate-800/80 w-full sm:w-1/2 shadow-xl shadow-black/20">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                <Compass className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-[11px] text-slate-500 font-mono text-center uppercase tracking-widest">Số Điện Thoại</h4>
                <p className="text-sm md:text-base font-semibold text-white text-center mt-1.5">0976104708</p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col items-center w-full">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5 font-display">
              Mạng xã hội công việc
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/lvkhoinguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-2xl transition-all shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/l%C3%AA-v%C3%B5-kh%C3%B4i-nguy%C3%AAn-21407a2a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-2xl transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

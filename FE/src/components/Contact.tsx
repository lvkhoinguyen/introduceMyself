import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle2, Loader2, Compass } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Vui lòng điền đầy đủ tất cả các trường."
      });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Gửi lời nhắn thành công!"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại."
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi lời nhắn:", error);
      setStatus({
        type: "error",
        message: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau."
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              <Mail className="w-3.5 h-3.5" />
              <span>Liên Hệ</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold">Kết Nối Với Tôi</h2>
            
            <p className="text-slate-400 leading-relaxed font-sans text-sm md:text-base">
              Bạn đang tìm kiếm một sinh viên CNTT năng động làm đồ án, thực tập sinh backend/full-stack hoặc muốn thảo luận về cờ vua và chạy bộ? Đừng ngần ngại gửi tin nhắn trực tuyến ngay bên cạnh hoặc liên hệ qua các mạng xã hội của tôi!
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-mono">EMAIL CÁ NHÂN</h4>
                  <p className="text-sm font-semibold text-white">levokhoinguyen.it@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                  <Compass className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-mono">ĐỊA CHỈ</h4>
                  <p className="text-sm font-semibold text-white">Đại học Công nghiệp Hà Nội, Hà Nội, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 font-display">
                Mạng xã hội công việc
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-emerald-400 text-slate-300 rounded-xl transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-emerald-400 text-slate-300 rounded-xl transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-850/80 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form header */}
              <div className="pb-2 border-b border-slate-900">
                <h3 className="text-lg font-bold font-display text-white">Gửi lời nhắn trực tuyến</h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">Lời nhắn của bạn sẽ được lưu trực tiếp vào máy chủ của tôi</p>
              </div>

              {/* Status Alert box */}
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-start gap-3 border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : status.type === "error"
                      ? "bg-red-500/10 border-red-500/20 text-red-400"
                      : "bg-slate-800 border-slate-700 text-slate-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : status.type === "error" ? (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <Loader2 className="w-5 h-5 shrink-0 mt-0.5 animate-spin" />
                  )}
                  <div className="text-xs md:text-sm font-sans font-medium">
                    {status.type === "submitting" ? "Đang gửi thông tin liên hệ của bạn..." : status.message}
                  </div>
                </motion.div>
              )}

              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300 font-display">
                  Tên của bạn
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === "submitting"}
                  placeholder="Nhập họ và tên..."
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800/80 focus:border-emerald-500 focus:outline-none rounded-xl text-sm transition-all text-white placeholder-slate-600 font-sans"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300 font-display">
                  Địa chỉ Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === "submitting"}
                  placeholder="vi_du@email.com"
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800/80 focus:border-emerald-500 focus:outline-none rounded-xl text-sm transition-all text-white placeholder-slate-600 font-sans"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 font-display">
                  Lời nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.type === "submitting"}
                  placeholder="Nhập nội dung lời nhắn tại đây..."
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800/80 focus:border-emerald-500 focus:outline-none rounded-xl text-sm transition-all text-white placeholder-slate-600 font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-btn"
                type="submit"
                disabled={status.type === "submitting"}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 disabled:bg-slate-800 text-slate-950 font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed group text-sm md:text-base"
              >
                {status.type === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <span>Gửi lời nhắn</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

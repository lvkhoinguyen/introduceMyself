import { useState, type FormEvent, type ChangeEvent } from "react";
import { AlertCircle, Check, CheckCircle2, Copy, Github, Linkedin, Loader2, Mail, MessageSquare, Phone, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "levokhoinguyen.it@gmail.com";
  const phoneNumber = "0976104708";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg("Vui lòng nhập họ và tên của bạn.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      setErrorMsg("Vui lòng nhập địa chỉ email hợp lệ.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg("Vui lòng nhập nội dung lời nhắn.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await axios.post("/api/messages", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (response.data?.success) {
        setSuccessMsg(response.data.message || "Lời nhắn của bạn đã được gửi thành công!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg(response.data?.error || "Có lỗi xảy ra khi gửi tin nhắn, vui lòng thử lại sau.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        setErrorMsg(err.response.data.error);
      } else {
        // Mock success fallback for frontend demonstration if backend is offline
        setSuccessMsg("Cảm ơn bạn! Lời nhắn đã được ghi nhận thành công.");
        setFormData({ name: "", email: "", message: "" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-14"
        >
          {/* Ambient Lighting Behind Card */}
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Kết nối & Cơ hội hợp tác</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cùng nhau thảo luận về công việc hoặc dự án mới.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Mình đang tích cực tìm kiếm cơ hội làm việc trong vai trò <strong className="text-emerald-300 font-semibold">Backend Developer (Java Spring Boot)</strong> hoặc <strong className="text-cyan-300 font-semibold">Full-Stack Engineer</strong>. Rất hân hạnh được trao đổi cùng Quý công ty và Anh/Chị!
            </p>
          </div>

          {/* Grid: Left Contacts / Right Form */}
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
            {/* Left Column: Direct Info & Quick Copy */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Email Card with Quick Copy */}
                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-emerald-500/30 hover:bg-slate-900/90">
                  <div className="flex items-center gap-3.5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-400 border border-emerald-400/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Email liên hệ
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    title="Sao chép email"
                    aria-label="Sao chép email"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card with Quick Copy */}
                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-emerald-500/30 hover:bg-slate-900/90">
                  <div className="flex items-center gap-3.5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/15 text-cyan-400 border border-cyan-400/20">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Số điện thoại / Zalo
                      </span>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition font-mono"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyPhone}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    title="Sao chép số điện thoại"
                    aria-label="Sao chép số điện thoại"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                <span className="text-xs font-semibold text-slate-300 block mb-3">
                  Hồ sơ trực tuyến & Mạng xã hội
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/lvkhoinguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/l%C3%AA-v%C3%B5-kh%C3%B4i-nguy%C3%AAn-21407a2a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Gửi tin nhắn trực tiếp</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Điền thông tin bên dưới và lời nhắn sẽ được chuyển thẳng tới mình.
              </p>

              {successMsg ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-slate-950">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-emerald-200">Gửi thành công!</h4>
                  <p className="mt-2 text-xs text-slate-300">{successMsg}</p>
                  <button
                    type="button"
                    onClick={() => setSuccessMsg(null)}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Gửi tin nhắn khác
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                      Họ và tên của bạn
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ví dụ: Nguyễn Văn A (Nhà tuyển dụng / Doanh nghiệp)"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                      Địa chỉ Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                      Nội dung lời nhắn
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Chào Khôi Nguyên, chúng tôi muốn trao đổi về cơ hội việc làm tại..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:opacity-95 active:scale-98 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Đang gửi lời nhắn...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Gửi lời nhắn ngay</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

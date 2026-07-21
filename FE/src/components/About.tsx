import { motion } from "motion/react";
import { Award, ShieldAlert, Heart, Languages, Film, Trophy, Flame } from "lucide-react";

export default function About() {
  const hobbies = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      title: "Cờ vua trí tuệ",
      desc: "Thường xuyên rèn luyện tư duy chiến lược và sự kiên nhẫn qua cờ vua.",
      detail: "Đạt mức Elo 2000 Rapid",
      bgColor: "bg-yellow-500/10 border-yellow-500/20"
    },
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: "Chạy bộ sức bền",
      desc: "Duy trì tính kỷ luật, sức mạnh tinh thần và thể lực thông qua tập luyện hàng ngày.",
      detail: "Thành tích pace 4:23",
      bgColor: "bg-red-500/10 border-red-500/20"
    },
    {
      icon: <Languages className="w-6 h-6 text-blue-500" />,
      title: "Ngoại ngữ mới",
      desc: "Mở rộng góc nhìn văn hóa và tăng cường khả năng tự học ngôn ngữ mới.",
      detail: "Đang học tiếng Hàn (Sơ cấp 1)",
      bgColor: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Film className="w-6 h-6 text-purple-500" />,
      title: "Điện ảnh kinh điển",
      desc: "Yêu thích phân tích chiều sâu nghệ thuật, kịch bản và thông điệp nhân văn.",
      detail: "Ví dụ: Phim ngắn \"Most\" (2003)",
      bgColor: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Block: Narrative introduction */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>Về Tôi</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Mục tiêu phát triển sự nghiệp
            </h2>

            <p className="text-slate-400 leading-relaxed text-base font-sans">
              Tôi là sinh viên năm cuối đầy nhiệt huyết chuyên ngành Công nghệ thông tin tại HaUI. Với mong muốn trở thành một <strong className="text-emerald-400 font-semibold">Kỹ sư phần mềm backend/full-stack</strong> thực thụ, tôi luôn tập trung vào việc viết mã nguồn sạch, tối ưu hiệu năng hệ thống và thiết kế kiến trúc bền vững.
            </p>

            <p className="text-slate-400 leading-relaxed text-base font-sans">
              Đối với tôi, lập trình không chỉ là công việc mà còn là nghệ thuật giải quyết các bài toán phức tạp bằng tư duy logic và sự bền bỉ tuyệt đối.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Triết lý sống & làm việc</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  "Kỷ luật là cầu nối giữa mục tiêu và thành tựu." Tôi tin rằng tư duy sắc bén từ cờ vua và sức bền từ chạy bộ là nền tảng cốt lõi giúp tôi vượt qua mọi thách thức công nghệ.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Mindset & Discipline Grid (Sở thích cá nhân) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-display font-semibold text-slate-200 mb-2 flex items-center gap-2">
              <span>Tư Duy & Kỷ Luật Bản Thân</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-5 rounded-2xl border ${hobby.bgColor} transition-all hover:scale-[1.02] duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="mb-4">{hobby.icon}</div>
                    <h4 className="text-base font-bold text-white mb-2">{hobby.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{hobby.desc}</p>
                  </div>
                  <div className="mt-auto pt-2 border-t border-slate-800/40">
                    <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md">
                      {hobby.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

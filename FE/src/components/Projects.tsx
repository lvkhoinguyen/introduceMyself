import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Code2, Cpu, Sparkles, ChevronRight } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      id: "shopping-web",
      title: "XÂY DỰNG PHẦN MỀM BÁN HÀNG TRÊN NỀN TẢNG WEB SỬ DỤNG SPRING BOOT (ShoppingWeb)",
      description: "Hệ thống E-commerce toàn diện được thiết kế để tối ưu hóa quy trình kinh doanh trực tuyến, cung cấp trải nghiệm mua sắm mượt mà từ duyệt sản phẩm đến thanh toán.",
      features: [
        "Quản lý danh mục sản phẩm, đơn hàng thông minh",
        "Tích hợp thanh toán trực tuyến an toàn",
        "Trợ lý Chatbot hỗ trợ chăm sóc khách hàng 24/7"
      ],
      technologies: ["Java Spring Boot", "React", "Cổng thanh toán VNPay", "Chatbot"],
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400 border-emerald-500/20"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      description: "Website thương hiệu cá nhân để giới thiệu năng lực, hành trình học vấn và định hướng phát triển bản thân dưới dạng một SPA hiện đại, responsive và tối ưu hiệu suất.",
      features: [
        "Giao diện chuẩn Mobile-first, Dark mode hiện đại",
        "Hiệu ứng cuộn mượt mà & hoạt ảnh mượt mà",
        "API backend xử lý form liên hệ trực tuyến"
      ],
      technologies: ["React", "Vercel", "Java Spring Boot", "Docker", "Railway"],
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "text-blue-400 border-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Sản Phẩm</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Các Dự Án Tiêu Biểu</h2>
          <p className="text-slate-400 mt-3 font-sans">Các hệ thống thực tế do tôi thiết kế, triển khai từ backend tới frontend</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-gradient-to-br ${project.color} border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-2xl overflow-hidden`}
            >
              <div>
                {/* Tech Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-emerald-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                    Project #{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-display leading-tight mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Key Features Block */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-display">
                    Điểm nổi bật hệ thống
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

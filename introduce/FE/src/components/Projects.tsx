import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Code2, ChevronRight, Github } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      id: "idp-dms",
      title: "IDP.DMS - Hệ thống Quản lý Tài liệu Số",
      description: "Phần mềm DMS (Document Management System) cấp doanh nghiệp, cung cấp giải pháp toàn diện để quản lý, phân loại, lưu trữ và số hóa tài liệu một cách thông minh và bảo mật.",
      features: [
        "Quản lý vòng đời tài liệu doanh nghiệp",
        "Số hóa và phân loại tài liệu tự động",
        "Tìm kiếm và truy xuất tài liệu nhanh chóng"
      ],
      technologies: ["C# .NET", "Python", "React", "Enterprise System"],
      color: "from-blue-600/20 to-cyan-500/10",
      accent: "text-blue-400 border-blue-500/20",
      github: "#",
      demo: "#"
    },
    {
      id: "shopping-web",
      title: "ShoppingWeb - Hệ Thống E-Commerce",
      description: "Website bán hàng xây dựng dựa trên RESTful API. Tích hợp các tính năng nâng cao nhằm tối ưu hóa trải nghiệm mua sắm của người dùng.",
      features: [
        "Tích hợp cổng thanh toán trực tuyến VNPAY",
        "Hỗ trợ người dùng tự động với Chatbot thông minh",
        "Đóng gói và triển khai ứng dụng bằng Docker"
      ],
      technologies: ["Java Spring Boot", "React", "Docker", "VNPAY", "Chatbot"],
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400 border-emerald-500/20",
      github: "#",
      demo: "#"
    },
    {
      id: "object-detection",
      title: "Hệ Thống Nhận Diện Phương Tiện (YOLOv8)",
      description: "Hệ thống nhận diện và theo dõi xe cộ tự động thời gian thực. Bao gồm quá trình huấn luyện model tùy chỉnh và tối ưu hóa định dạng để đạt hiệu suất cao.",
      features: [
        "Sử dụng mô hình YOLOv8 cho Object Detection",
        "Tối ưu hóa suy luận (inference) bằng định dạng ONNX",
        "Triển khai API Backend bằng FastAPI cho ảnh & video thời gian thực"
      ],
      technologies: ["Python", "YOLOv8", "ONNX", "FastAPI", "Computer Vision"],
      color: "from-purple-500/20 to-fuchsia-500/10",
      accent: "text-purple-400 border-purple-500/20",
      github: "#",
      demo: "#"
    },
    {
      id: "handwriting-recognition",
      title: "Mô Hình Nhận Diện Chữ Viết Tay",
      description: "Dự án Machine Learning ứng dụng mạng nơ-ron tích chập (CNN) để phân tích và nhận diện chữ viết tay qua quy trình xử lý ảnh chuyên sâu 4 giai đoạn.",
      features: [
        "Tiền xử lý: Chuẩn hóa hình ảnh theo chuẩn training",
        "Trích xuất đặc trưng hình ảnh bằng mô hình CNN",
        "So sánh và dự đoán kết quả đầu ra với độ chính xác cao"
      ],
      technologies: ["Python", "Machine Learning", "CNN", "Image Processing"],
      color: "from-orange-500/20 to-amber-500/10",
      accent: "text-orange-400 border-orange-500/20",
      github: "#",
      demo: "#"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      description: "Website thương hiệu cá nhân để giới thiệu năng lực, dự án và định hướng phát triển bản thân dưới dạng một SPA hiện đại, responsive.",
      features: [
        "Giao diện chuẩn Mobile-first, Dark mode hiện đại",
        "Hiệu ứng cuộn mượt mà & hoạt ảnh tương tác",
        "Kiến trúc component React dễ dàng mở rộng"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Java"],
      color: "from-slate-500/20 to-slate-400/10",
      accent: "text-slate-400 border-slate-500/20",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Sản Phẩm</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Các Dự Án Tiêu Biểu</h2>
          <p className="text-slate-400 mt-3 font-sans">Các hệ thống và mô hình thực tế do tôi thiết kế, triển khai</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br ${project.color} border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-2xl overflow-hidden`}
            >
              <div>
                {/* Tech Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 text-emerald-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                    Project #{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display leading-tight mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-5 font-sans line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features Block */}
                <div className="space-y-2 mb-6">
                  <ul className="space-y-1.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Tags & Links */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60 mb-5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-medium px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-300 transition-colors cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-xs font-medium text-emerald-400 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


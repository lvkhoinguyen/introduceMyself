import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "education",
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Sinh viên năm cuối ngành CNTT",
      institution: "Đại học Công nghiệp Hà Nội (HaUI)",
      period: "2022 - Hiện tại",
      description: "Học tập các kiến thức cốt lõi về Khoa học Máy tính, Cấu trúc dữ liệu và Giải thuật, Cơ sở dữ liệu và Kiến trúc phần mềm. Định hướng nghiên cứu chuyên sâu về các framework Java Spring Boot và hệ sinh thái React.",
      skills: ["Java", "Spring Boot", "SQL", "Software Architecture"]
    },
    {
      type: "project-milestone",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      title: "Phát triển hệ thống ShoppingWeb",
      institution: "Đồ án chuyên ngành & Thực hành",
      period: "2025",
      description: "Thiết kế và triển khai toàn diện hệ thống thương mại điện tử từ mô hình cơ sở dữ liệu đến các tính năng nghiệp vụ nâng cao như tích hợp thanh toán ngân hàng qua cổng VNPay và chatbot tự động tư vấn.",
      skills: ["Java Spring Boot", "VNPay API", "Chatbot", "REST API"]
    },
    {
      type: "personal-development",
      icon: <Award className="w-5 h-5 text-purple-400" />,
      title: "Xây dựng các dự án cá nhân & Triển khai",
      institution: "Học hỏi & Nghiên cứu Công nghệ mới",
      period: "Liên tục",
      description: "Tự nghiên cứu các công nghệ hiện đại phục vụ việc phát triển ứng dụng Full-stack. Làm quen với các công cụ triển khai Containerization (Docker), hạ tầng đám mây (Railway, Vercel) để chuẩn hóa quy trình DevOps cơ bản.",
      skills: ["Docker", "Railway", "Vercel", "Git & CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
            <span>Hành Trình</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Học Vấn & Quá Trình Phát Triển</h2>
          <p className="text-slate-400 mt-3 font-sans">Sự kết hợp giữa lý thuyết vững vàng tại HaUI và thực hành thực chiến qua các dự án</p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline marker with custom icon */}
              <div className="absolute -left-4 md:-left-5 top-0.5 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg z-10">
                {exp.icon}
              </div>

              {/* Card Container */}
              <div className="p-6 bg-slate-950/60 backdrop-blur-md border border-slate-800/80 rounded-2xl hover:border-slate-700 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">{exp.title}</h3>
                    <p className="text-sm text-slate-400 font-sans">{exp.institution}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/5 px-2.5 py-1 rounded-full border border-emerald-400/10 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-sans mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {skill}
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

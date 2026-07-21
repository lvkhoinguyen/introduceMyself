import { motion } from "motion/react";
import { Database, Layout, Settings, Cpu, HardDrive, Terminal } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Backend Development",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      description: "Xây dựng kiến trúc dịch vụ, xử lý nghiệp vụ nghiệp cơ sở dữ liệu và bảo mật APIs.",
      skills: [
        { name: "Java", level: 90, desc: "Ngôn ngữ cốt lõi, lập trình hướng đối tượng (OOP) vững chắc" },
        { name: "Spring Boot", level: 85, desc: "Xây dựng RESTful APIs, Spring Security, Data JPA" }
      ]
    },
    {
      title: "Frontend Integration",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      description: "Thiết kế giao diện người dùng tương tác cao, responsive và tối ưu hóa SEO/Trải nghiệm.",
      skills: [
        { name: "React", level: 80, desc: "Xây dựng Single Page Apps, React Hooks, Router" },
        { name: "Tailwind CSS", level: 90, desc: "Thiết kế giao diện hiện đại, tối ưu hóa CSS Utility classes" }
      ]
    },
    {
      title: "Deployment & Infrastructure",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
      description: "Đóng gói ứng dụng, triển khai tự động hóa hạ tầng đám mây và quản lý mã nguồn.",
      skills: [
        { name: "Docker", level: 75, desc: "Đóng gói container hóa ứng dụng độc lập" },
        { name: "Railway", level: 80, desc: "Triển khai dịch vụ backend và kết nối Database" },
        { name: "Vercel", level: 85, desc: "Deploy ứng dụng frontend SPA tối ưu hóa CDN" },
        { name: "Git", level: 85, desc: "Quản lý phiên bản mã nguồn, nhánh và phối hợp nhóm" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Năng Lực</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Kỹ Năng Kỹ Thuật</h2>
          <p className="text-slate-400 mt-3 font-sans">Các công nghệ tôi sử dụng thành thạo để giải quyết các bài toán lập trình</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="p-6 bg-slate-950/60 backdrop-blur-md border border-slate-800/80 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Header Section */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-200">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 font-sans">{skill.name}</span>
                        <span className="font-mono text-slate-500 font-medium">{skill.level}%</span>
                      </div>
                      
                      {/* Skill level indicator bar */}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal pt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual footer marker */}
              <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>STABLE STACK</span>
                <span>{group.skills.length} MODULES</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

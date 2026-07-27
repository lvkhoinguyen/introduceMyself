import { motion } from "motion/react";
import { ArrowUpRight, Code2, FolderGit2, Github } from "lucide-react";

const projects = [
  {
    title: "IDP.DMS",
    description:
      "Hệ thống quản lý tài liệu số cho doanh nghiệp, tập trung vào lưu trữ, phân loại và truy xuất nhanh.",
    tags: ["C# .NET", "Python", "React"],
    accent: "from-cyan-400/15 to-emerald-400/10",
  },
  {
    title: "ShoppingWeb",
    description:
      "E-commerce full-stack với REST API, thanh toán VNPay và chatbot hỗ trợ người dùng.",
    tags: ["Spring Boot", "React", "Docker"],
    accent: "from-emerald-400/15 to-lime-400/10",
  },
  {
    title: "Object Detection",
    description:
      "Pipeline nhận diện phương tiện thời gian thực với YOLOv8, ONNX và FastAPI.",
    tags: ["Python", "YOLOv8", "FastAPI"],
    accent: "from-violet-400/15 to-sky-400/10",
  },
  {
    title: "Handwriting Recognition",
    description:
      "Mô hình CNN nhận diện chữ viết tay, nhấn vào tiền xử lý và độ chính xác đầu ra.",
    tags: ["Python", "CNN", "ML"],
    accent: "from-amber-400/15 to-orange-400/10",
  },
  {
    title: "Personal Portfolio",
    description:
      "Website cá nhân dạng SPA, responsive, motion rõ và tối ưu cho tuyển dụng.",
    tags: ["React", "Tailwind", "Motion"],
    accent: "from-slate-400/15 to-white/5",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dự án</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Một số dự án mình đã học và triển khai.
            </h2>
          </div>
          <FolderGit2 className="hidden h-8 w-8 text-emerald-400 md:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6 backdrop-blur-xl`}
            >
              <div className="absolute inset-0 bg-slate-950/55 opacity-80 transition group-hover:opacity-70" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition group-hover:text-emerald-100"
                  >
                    Xem thêm
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-400 transition hover:text-white" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

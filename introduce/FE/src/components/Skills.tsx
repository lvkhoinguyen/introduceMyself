import { motion } from "motion/react";
import { Cpu, Database, Layout, Settings } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Database,
    description: "Kiến trúc dịch vụ, API và dữ liệu.",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "UI rõ ràng, responsive và có chuyển động.",
    skills: [
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Triển khai",
    icon: Settings,
    description: "Đóng gói, đưa lên cloud và vận hành cơ bản.",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Railway", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Kỹ năng</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Những công nghệ mình đang sử dụng nhiều nhất.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400">{group.description}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            <Cpu className="h-4 w-4 text-emerald-400" />
            Ghi chú
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Mình vẫn đang tiếp tục học và cải thiện từng ngày, đặc biệt ở phần kiến trúc backend, tối ưu giao diện và triển khai sản phẩm thực tế.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

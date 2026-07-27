import { motion, useScroll, useTransform } from "motion/react";

export default function TechBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.65, 0.35, 0.15]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.1),_transparent_28%),linear-gradient(180deg,#05070a_0%,#060a0c_100%)]" />

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-[30rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
    </div>
  );
}

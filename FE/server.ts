import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // In-memory messages store
  const messages: Array<{ id: string; name: string; email: string; message: string; timestamp: string }> = [];

  // API Route to submit messages
  app.post("/api/messages", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Vui lòng điền đầy đủ thông tin: Họ tên, Email và Lời nhắn." 
      });
    }

    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    messages.push(newMessage);
    console.log("New contact message received:", newMessage);

    return res.json({ 
      success: true, 
      message: "Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công tới Lê Võ Khôi Nguyên.",
      data: newMessage 
    });
  });

  // API Route to retrieve messages (useful for verification/debugging)
  app.get("/api/messages", (req, res) => {
    return res.json({ success: true, count: messages.length, messages });
  });

  // API Route to retrieve profile
  app.get("/api/profile", (req, res) => {
    return res.json({
      id: 1,
      fullName: "Lê Võ Khôi Nguyên",
      role: "Backend Developer",
      avatarUrl: "/avatar.jpg",
      githubUrl: "https://github.com/lvkhoinguyen",
      bio: "Mình là sinh viên năm cuối CNTT tại HaUI, quan tâm đến cả backend lẫn frontend. Khi làm dự án, mình thường chú ý đến cấu trúc code, hiệu năng và trải nghiệm sử dụng thực tế.",
      points: [
        "Ưu tiên mã nguồn sạch và dễ mở rộng.",
        "Thiết kế giao diện có nhịp, có khoảng thở, không phẳng lì.",
        "Tập trung sản phẩm web mang cảm giác hiện đại và đáng tin."
      ]
    });
  });

  // API Route to retrieve projects
  app.get("/api/projects", (req, res) => {
    return res.json([
      {
        id: 1,
        title: "IDP.DMS",
        description: "Hệ thống quản lý tài liệu số cho doanh nghiệp, tập trung vào lưu trữ, phân loại và truy xuất nhanh.",
        tags: ["C# .NET", "Python", "React"],
        accent: "from-cyan-400/15 to-emerald-400/10",
        githubUrl: "https://github.com/lvkhoinguyen"
      },
      {
        id: 2,
        title: "ShoppingWeb",
        description: "E-commerce full-stack với REST API, thanh toán VNPay và chatbot hỗ trợ người dùng.",
        tags: ["Spring Boot", "React", "Docker"],
        accent: "from-emerald-400/15 to-lime-400/10",
        githubUrl: "https://github.com/lvkhoinguyen"
      },
      {
        id: 3,
        title: "Object Detection",
        description: "Pipeline nhận diện phương tiện thời gian thực với YOLOv8, ONNX và FastAPI.",
        tags: ["Python", "YOLOv8", "FastAPI"],
        accent: "from-violet-400/15 to-sky-400/10",
        githubUrl: "https://github.com/lvkhoinguyen"
      },
      {
        id: 4,
        title: "Handwriting Recognition",
        description: "Mô hình CNN nhận diện chữ viết tay, nhấn vào tiền xử lý và độ chính xác đầu ra.",
        tags: ["Python", "CNN", "ML"],
        accent: "from-amber-400/15 to-orange-400/10",
        githubUrl: "https://github.com/lvkhoinguyen"
      },
      {
        id: 5,
        title: "Personal Portfolio",
        description: "Website cá nhân dạng SPA, responsive, motion rõ và tối ưu cho tuyển dụng.",
        tags: ["React", "Tailwind", "Motion"],
        accent: "from-slate-400/15 to-white/5",
        githubUrl: "https://github.com/lvkhoinguyen"
      }
    ]);
  });

  // API Route to retrieve skills
  app.get("/api/skills", (req, res) => {
    return res.json([
      {
        id: 1,
        title: "Backend",
        iconType: "database",
        description: "Kiến trúc dịch vụ, API và dữ liệu.",
        skills: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 85 }
        ]
      },
      {
        id: 2,
        title: "Frontend",
        iconType: "layout",
        description: "UI rõ ràng, responsive và có chuyển động.",
        skills: [
          { name: "React", level: 80 },
          { name: "Tailwind CSS", level: 90 }
        ]
      },
      {
        id: 3,
        title: "Triển khai",
        iconType: "settings",
        description: "Đóng gói, đưa lên cloud và vận hành cơ bản.",
        skills: [
          { name: "Docker", level: 75 },
          { name: "Vercel", level: 85 },
          { name: "Railway", level: 80 }
        ]
      }
    ]);
  });

  // API Route to retrieve experiences
  app.get("/api/experiences", (req, res) => {
    return res.json([
      {
        id: 1,
        title: "Sinh viên năm cuối ngành CNTT",
        meta: "Đại học Công nghiệp Hà Nội",
        period: "2022 - hiện tại",
        description: "Học các nền tảng cốt lõi như cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu và kiến trúc phần mềm. Đồng thời tập trung vào Spring Boot và hệ sinh thái React.",
        iconType: "graduation"
      },
      {
        id: 2,
        title: "Phát triển hệ thống ShoppingWeb",
        meta: "Đồ án chuyên ngành & thực hành",
        period: "2025",
        description: "Thiết kế và triển khai hệ thống thương mại điện tử với API rõ ràng, thanh toán VNPay và chatbot hỗ trợ người dùng.",
        iconType: "briefcase"
      },
      {
        id: 3,
        title: "Xây dựng dự án cá nhân & triển khai",
        meta: "Học hỏi liên tục",
        period: "Liên tục",
        description: "Tự nghiên cứu Docker, Railway, Vercel và quy trình triển khai cơ bản để sản phẩm chạy ổn định hơn.",
        iconType: "award"
      }
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});

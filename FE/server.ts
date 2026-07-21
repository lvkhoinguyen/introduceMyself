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

# TODO

## Step plan (BE -> FE data) - ĐÃ HOÀN THÀNH ✅
- [x] 1. Xác nhận BE có đầy đủ các endpoint:
  - `GET /api/profile`
  - `GET /api/projects`
  - `GET /api/skills`
  - `GET /api/experiences`
  - `POST /api/messages` & `GET /api/messages`
- [x] 2. Tạo type TS (`Profile`, `Project`, `SkillGroup`, `Experience`) ở FE tại `FE/src/types/portfolio.ts`.
- [x] 3. Chỉnh toàn bộ các component:
  - `Hero.tsx` -> fetch `/api/profile`
  - `About.tsx` -> fetch `/api/profile` (bio & points)
  - `Projects.tsx` -> fetch `/api/projects`
  - `Skills.tsx` -> fetch `/api/skills`
  - `Experience.tsx` -> fetch `/api/experiences`
  - `Contact.tsx` -> form tương tác gửi tin nhắn tới `POST /api/messages`
- [x] 4. Đảm bảo CORS, Vite proxy `/api` -> `http://localhost:8080`.
- [x] 5. Tự động seed data bằng `DataInitializer` khi Spring Boot khởi động.
- [x] 6. Tích hợp H2 in-memory db fallback và mock endpoints trong `server.ts`.
- [x] 7. Build/test FE & BE chạy mượt mà, không lỗi.



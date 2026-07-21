# TODO

## Step plan (BE -> FE data)
1. Xác nhận BE đang có endpoint `GET /api/profile` trả về dữ liệu `Profile`.
2. Tạo type `Profile` (TS) ở FE.
3. Chỉnh các component (Hero/About/Contact...) để thay text hard-code bằng dữ liệu lấy từ `GET http://localhost:8080/api/profile`.
4. Bảo đảm CORS/URL đúng (BE port 8080). Tránh gọi sai path.
5. Build/test FE & BE chạy cùng lúc và kiểm tra hiển thị.


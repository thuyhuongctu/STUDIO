# STUDIO · Je m'appelle Hương

**Xưởng video AI của Je m'appelle Hương (Lecturer & Researcher)** — web app dựng video thuyết trình chạy hoàn toàn trên trình duyệt, dùng được trên **điện thoại lẫn máy tính**, cài được lên màn hình chính như app thật (PWA).

*AI video studio by Je m'appelle Hương — a browser-based presentation-video maker that works on both phone and desktop, installable as a PWA.*

## ✨ Tính năng / Features

- 🎬 **Kịch bản theo cảnh** — nhập từ **PDF**, **CSV** hoặc dán văn bản; mỗi đoạn thành một cảnh; tự lưu trên thiết bị (localStorage).
- 🎙 **Giọng đọc của bạn** — ghi âm trực tiếp từng cảnh hoặc tải file audio lên; nhân vật mấp máy theo nhịp giọng nói (Web Audio analyser).
- 👩‍🏫 **HUONG AI** — nhân vật trình bày mặc định (phong cách hoạt hình 3D) hiển thị trong khung trình bày bên phải video; có thể thay bằng ảnh PNG tách nền của riêng bạn.
- 🗺 **Bản đồ Việt Nam in mờ** — làm nền chìm cho giao diện và video, có quần đảo **Hoàng Sa** và **Trường Sa**.
- 🎞 **Media nền từng cảnh** — nhận cả ảnh và video (video tự tắt tiếng làm phông chuyển động).
- 📝 **Phụ đề, tiêu đề, dòng thương hiệu, logo LR** tùy chỉnh; song ngữ **VI/EN**.
- ⬇️ **Xuất video ngay trên máy** — canvas + MediaRecorder, kèm audio; MP4 trên iPhone/iPad mới, WebM trên Android/desktop. Không cần server, dữ liệu không rời khỏi thiết bị.
- 🌙 **Giao diện sáng/tối** tự theo hệ thống; bố cục mobile có thanh điều hướng dưới đáy.

## 🚀 Dùng thử / Run

Mở trực tiếp `index.html`, hoặc bật GitHub Pages cho kho này (Settings → Pages → Deploy from branch) rồi truy cập trên điện thoại và chọn **"Thêm vào màn hình chính"** để dùng như app.

```bash
# chạy cục bộ
python3 -m http.server 8080
# → http://localhost:8080
```

> Lưu ý: ghi âm micro và xuất video cần chạy qua `https://` hoặc `localhost` (yêu cầu bảo mật của trình duyệt).

## 🎨 Thương hiệu / Brand

Đồng bộ với các kho **M-AIDA** và trang cá nhân: huy hiệu tròn **LR** *(Je m'appelle Huong · Lecturer & Researcher)*, nền giấy kem `#f4efe9`, hồng đô trầm `#9e3b4e`, điểm nhấn vàng đồng `#a9781f`.

## 📁 Cấu trúc / Structure

```
index.html            # toàn bộ ứng dụng (HTML + CSS + JS, không build step)
manifest.webmanifest  # PWA manifest (cài lên điện thoại)
sw.js                 # service worker — chạy ngoại tuyến sau lần mở đầu
icons/                # logo thương hiệu LR (đồng bộ với M-AIDA)
assets/huong-ai.jpg   # nhân vật HUONG AI
```

---

© Đỗ Thùy Hương · *Je m'appelle Hương* · Lecturer & Researcher

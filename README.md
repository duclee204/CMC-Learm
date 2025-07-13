# CMC-Learn - Learning Management System

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)

## 📖 Giới thiệu

CMC-Learn là một hệ thống quản lý khóa học (Learning Management System - LMS) được phát triển để hỗ trợ việc học trực tuyến. Hệ thống cung cấp nền tảng cho giảng viên và sinh viên tương tác, chia sẻ tài liệu và theo dõi tiến trình học tập.

## ✨ Tính năng chính

### 🔐 Quản lý tài khoản
- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- Phân quyền người dùng (Giảng viên/Sinh viên)

### 👨‍🏫 Dành cho Giảng viên
- Upload video bài học
- Tạo và quản lý khóa học
- Theo dõi tiến trình học tập của sinh viên

### 👨‍🎓 Dành cho Sinh viên
- Đăng ký tham gia khóa học
- Xem video bài học
- Theo dõi tiến trình học tập cá nhân

## 🏗️ Kiến trúc hệ thống

```
CMC-Learn/
├── LMS-Backend/     # Spring Boot API Backend
├── LMS-Frontend/    # Angular Frontend
└── README.md        # Tài liệu dự án
```

## 🛠️ Công nghệ sử dụng

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Security** - Xác thực và phân quyền
- **Spring Data JPA** - Tương tác cơ sở dữ liệu
- **MySQL/PostgreSQL** - Cơ sở dữ liệu
- **Maven** - Quản lý dependencies

### Frontend
- **Angular 17+**
- **TypeScript**
- **Angular Material** - UI Components
- **RxJS** - Reactive programming
- **Node.js & npm** - Package manager

## 📋 Yêu cầu hệ thống

### Backend Requirements
- Java 17 trở lên
- Maven 3.6+
- MySQL 8.0+ hoặc PostgreSQL 12+

### Frontend Requirements
- Node.js 18+
- npm 9+
- Angular CLI 17+

## 🚀 Hướng dẫn cài đặt

### 1. Clone repository
```bash
git clone https://github.com/duclee204/CMC-Learm.git
cd CMC-Learn
```

### 2. Cài đặt Backend
```bash
cd LMS-Backend

# Cài đặt dependencies
mvn clean install

# Chạy ứng dụng
mvn spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

### 3. Cài đặt Frontend
```bash
cd LMS-Frontend

# Cài đặt dependencies
npm install

# Chạy ứng dụng development
ng serve
```

Frontend sẽ chạy tại: `http://localhost:4200`

## 🔧 Cấu hình

### Backend Configuration
Cấu hình database trong file `application.properties`:

```properties
# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/cmc_learn
spring.datasource.username=your_username
spring.datasource.password=your_password

# JPA configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Frontend Configuration
Cấu hình API endpoint trong `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## 🗂️ Cấu trúc dự án

### Backend Structure
```
LMS-Backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cmc/learn/
│   │   │       ├── controller/     # REST Controllers
│   │   │       ├── service/        # Business Logic
│   │   │       ├── repository/     # Data Access Layer
│   │   │       ├── entity/         # JPA Entities
│   │   │       └── config/         # Configuration Classes
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── target/
└── pom.xml
```

### Frontend Structure
```
LMS-Frontend/
├── src/
│   ├── app/
│   │   ├── components/       # Shared Components
│   │   ├── pages/           # Page Components
│   │   ├── services/        # Angular Services
│   │   ├── guards/          # Route Guards
│   │   └── models/          # TypeScript Interfaces
│   ├── assets/              # Static Assets
│   └── environments/        # Environment Config
├── public/
└── package.json
```

## 🧪 Testing

### Backend Testing
```bash
cd LMS-Backend
mvn test
```

### Frontend Testing
```bash
cd LMS-Frontend
ng test
```

## 📚 API Documentation

API endpoints chính:

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/logout` - Đăng xuất

### Courses
- `GET /api/courses` - Lấy danh sách khóa học
- `POST /api/courses` - Tạo khóa học mới
- `GET /api/courses/{id}` - Chi tiết khóa học
- `PUT /api/courses/{id}` - Cập nhật khóa học

### Videos
- `POST /api/videos/upload` - Upload video
- `GET /api/videos/{courseId}` - Lấy video theo khóa học

## 👥 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 Issues và Bug Reports

Nếu bạn gặp vấn đề hoặc muốn đề xuất tính năng mới, vui lòng tạo issue trên GitHub:
[https://github.com/duclee204/CMC-Learm/issues](https://github.com/duclee204/CMC-Learm/issues)

## 📞 Liên hệ

- **Project Link**: [https://github.com/duclee204/CMC-Learn](https://github.com/duclee204/CMC-Learn)

## 🙏 Acknowledgments

- Cảm ơn tất cả các thành viên đã đóng góp vào dự án
- Cảm ơn cộng đồng Spring Boot và Angular
---

**CMC-Learn v0.0.1**
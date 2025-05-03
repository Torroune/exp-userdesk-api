# UserDesk API

This is a simple user authentication API built with **Express.js** and **MongoDB**. It provides secure endpoints for user registration, login, and profile access using **JWT-based authentication**.

## 📦 Features

- User registration with hashed passwords (bcrypt)
- Secure login with JSON Web Tokens (JWT)
- Protected routes middleware (`protect`)
- Get current authenticated user
- RESTful API structure
- Centralized error handling

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for token generation
- dotenv for environment config

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

```bash
git clone https://github.com/Torroune/exp-userdesk-api.git
cd userdesk
npm install
```

### Environment Variables

Create a `.env` file in the root and add the following:

```env
PORT=your_port_number (3000)
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## 📫 API Endpoints

### Public Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/users`       | Register new user |
| POST   | `/api/users/login` | Login user        |

### Protected Routes

| Method | Route            | Description              |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/users`     | Get all users            |
| GET    | `/api/users/me`  | Get current user profile |
| GET    | `/api/users/:id` | Get user by ID           |
| PUT    | `/api/users/:id` | Update user              |
| DELETE | `/api/users/:id` | Delete user              |

> 🔐 Protected routes require the `Authorization: Bearer <token>` header.

## 🧪 Testing

You can test the API using [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/):

1. Register a user: `POST /api/users`
2. Login and copy the returned token
3. Access protected routes with `Authorization: Bearer <your_token>`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

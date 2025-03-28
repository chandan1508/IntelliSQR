# Full-Stack Intern Assignment

## Objective
This project is a full-stack application built using React with TypeScript for the frontend and Node.js with Prisma (MongoDB) for the backend. The frontend follows a provided Figma design, ensuring type safety and best practices.

---

## Tech Stack

### Backend:
- **Node.js + TypeScript**
- **Express.js** (Routing)
- **Prisma** (ORM for MongoDB)
- **JWT** (Authentication)
- **dotenv** (Environment variables)
- **bcrypt** (Password hashing)

---

## Folder Structure


### **Backend (`backend/`):**
```
backend/
│── src/
│   ├── controllers/
│   │   ├── authController.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   ├── middleware/
│   │   ├── errorHandler.ts
│   ├── services/
│   │   ├── authService.ts
│   ├── app.ts
│   ├── server.ts
│── prisma/
│   ├── schema.prisma
│── .env
│── package.json
│── tsconfig.json
```

---

## Setup Instructions

### **1. Clone the repository:**
```sh
git clone https://github.com/your-repo/fullstack-assignment.git
cd backend
```

### **2. Setup Environment Variables:**
Create a `.env` file in the backend and add:
```env
DATABASE_URL=mongodb+srv://<your_mongo_db_connection_string>
JWT_SECRET=your_jwt_secret
PORT=5000
```

### **3. Install dependencies:**
```sh
npm install
```

### **4. Set up Prisma and MongoDB:**
```sh
npx prisma generate
```

### **5. Start the backend server:**
```sh
npm run dev
```

---

## API Endpoints

### **Authentication Routes:**
| Method | Endpoint        | Description               |
|--------|---------------|---------------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | Authenticate user and return JWT |

---

## Features Implemented
- **User Authentication:** Secure login and registration with JWT.
- **Persistent Login State:** User session managed using LocalStorage.
- **Protected Routes:** Users must be authenticated to access certain pages.
- **Form Validation:** Uses Zod and React Hook Form for validation.
- **Error Handling:** Displays API errors meaningfully.





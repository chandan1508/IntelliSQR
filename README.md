# Full-Stack Intern Assignment
Demo Video:- https://drive.google.com/file/d/1i7xMBOWiY6dohvyxjihrBAWICoZNKgOA/view?usp=sharing
## Objective
This project is a full-stack application built using React with TypeScript for the frontend and Node.js with Prisma (MongoDB) for the backend. The frontend follows a provided Figma design, ensuring type safety and best practices.

---

## Tech Stack

### Frontend:
- **React (Vite) + TypeScript**
- **Zod** (Schema validation)
- **React Hook Form** (Form management)
- **React Query** (Data fetching & caching)
- **TailwindCSS** (Styling)

### Backend:
- **Node.js + TypeScript**
- **Express.js** (Routing)
- **Prisma** (ORM for MongoDB)
- **JWT** (Authentication)
- **dotenv** (Environment variables)
- **bcrypt** (Password hashing)

---

## Folder Structure

### **Frontend (`frontend/`):**
```
frontend/
│── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   ├── Button.tsx
│   ├── pages/
│   │   ├── Home.tsx
|   |   ├── Login.tsx
|   |   ├── Register.tsx
│   ├── routes/
│   │   ├── ProtectedRoute.tsx
|   |   ├── PublicRoute.tsx
│   ├── services/
│   │   ├── authService.ts (API handling)
│   ├── App.tsx
│── package.json
│── vite.config.ts
```

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
cd IntelliSQR
```

### **2. Setup Environment Variables Backend:**
Create a `.env` file in the backend and add:
```env
DATABASE_URL=mongodb+srv://<your_mongo_db_connection_string>
JWT_SECRET=your_jwt_secret
PORT=5000
```

### **3. Setup Environment Variables Frontend:**
Create a `.env` file in the frontend and add:
```env
VITE_API_BASE_URL=http://localhost:5000/api/auth
```

---

## Frontend

### **1. Install dependencies:**
```sh
cd frontend
npm install
```

### **2. Start the frontend server:**
```sh
npm run dev
```

---

## Backend

### **1. Install dependencies:**
```sh
cd backend
npm install
```

### **2. Set up Prisma and MongoDB:**
```sh
npx prisma generate
```

### **3. Start the backend server:**
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





# Full-Stack Intern Assignment

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

---

## Setup Instructions

### **1. Clone the repository:**
```sh
git clone https://github.com/chandan1508/IntelliSQR
cd frontend
```

### **2. Setup Environment Variables:**
Create a `.env` file in the frontend and add:
```env
VITE_API_BASE_URL=http://localhost:5000/api/auth

```



### **3. Install dependencies:**
```sh
npm install
```

### **4. Start the frontend server:**
```sh
npm run dev
```

---

## Features Implemented
- **User Authentication:** Secure login and registration with JWT.
- **Persistent Login State:** User session managed using LocalStorage.
- **Protected Routes:** Users must be authenticated to access certain pages.
- **Form Validation:** Uses Zod and React Hook Form for validation.
- **Error Handling:** Displays API errors meaningfully.


import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import errorHandler from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;

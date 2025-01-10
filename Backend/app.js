import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js"
dotenv.config();
connectDB();

const app=express();
app.use(express.json());

app.use('/api/user',userRoutes);

export default app;
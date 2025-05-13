import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import MessageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", MessageRoutes);

app.listen(process.env.PORT, () => {
  console.log("App is running on port: " + process.env.PORT);
  connectDB();
});

import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("App is running on port: " + process.env.PORT);
  connectDB();
});

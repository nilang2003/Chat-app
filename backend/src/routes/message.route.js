//cloudinary: 21ce022. also check windsurf and cursor.
import express from "express";
import { protectRoute } from "./../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/sender/:id", protectRoute, sendMessage);

export default router;

import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {
  getMessages,
  getUsersForSidebar,
} from "../contollers/message.controllers";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/messages", protectRoute, getMessages);
router.post("/send/:id", protectRoute)

export default router;

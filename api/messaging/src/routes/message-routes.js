import { Router } from "express";
import {
  cleanMessages,
  createMessage,
  getMessages,
} from "../controllers/message-controller.js";

const router = Router();

router.post("/messages", createMessage);
router.get("/messages", getMessages);
router.delete("/messages", cleanMessages);

export default router;

import { Router } from "express";
import {
  cleanPurchases,
  createPurchase,
  getPurchases,
} from "../controllers/purchase-controller.js";

const router = Router();

router.post("/purchases", createPurchase);
router.get("/purchases", getPurchases);
router.delete("/purchases", cleanPurchases);

export default router;

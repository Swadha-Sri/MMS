import express from "express";
import { adminSignin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/admin/signin", adminSignin);

export default router;

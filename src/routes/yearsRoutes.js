import { Router } from "express";
import { pdfYear } from "../controllers/year.controller.js";
const router = Router();
router.route('/:year').get(pdfYear);

export default router;
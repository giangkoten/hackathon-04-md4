import { Router } from "express";
import { getAllCatelory, getOne } from "../controllers/quizz.controller";

const router = Router();

router.get("/", getAllCatelory);
router.get("/:id", getOne);

export default router;

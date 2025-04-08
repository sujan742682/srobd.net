import { Router } from "express";
import { checkDakhilaController } from "../controllers/DakhilCheckingController.js";
const router=Router()

router.post('/checkDakhila',checkDakhilaController)

export default router
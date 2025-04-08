import { Router } from "express";
import { addUserRole } from "../controllers/AdminController.js";
const router=Router()
router.post('/addUserRole',addUserRole)
export default router
import { Router } from "express";
import { logout, login,register } from "../controllers/UserController.js";
import { userRegisterValidation,userLoginValidation } from "../middleware/withValidationError.js";
const router=Router()
router.post('/login',userLoginValidation,login)
router.post('/register',userRegisterValidation,register)
router.post('/logout',logout)

export default router
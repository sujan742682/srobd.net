import { Router } from "express";
import { getCurrentUser,getTotalUser,updateUser } from "../controllers/AppStatsController.js";
import { checkIsAdmin } from "../middleware/loginProtectMiddleware.js";
import uploads from "../middleware/multerMiddleware.js";
const router=Router()
router.route('/currentUser').get(getCurrentUser)
router.route('/admin/totalUser').get(checkIsAdmin('Admin'),getTotalUser)
// router.route('/updateUser').patch(uploads.single('avatar'),updateUser)
router.patch('/updateUser', uploads.single('avatar'), updateUser);

export default router
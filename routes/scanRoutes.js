import { Router } from "express";
import { getAllScanDetails,createScanDetails,getSingleScan,deleteScan,updateScan } from "../controllers/scanDetailsController.js";
import { idParamValidation } from "../middleware/withValidationError.js";


const router=Router()

router.route('/').get(getAllScanDetails).post(createScanDetails)
router.route('/:id').get(idParamValidation,getSingleScan).delete(idParamValidation,deleteScan).patch(idParamValidation,updateScan)
export default router
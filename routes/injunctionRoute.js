import { Router } from "express";
import { addInjunction,getAllInjunctionsController,updateInjunctionController,getInjunctionById,injunctionDeleteController } from "../controllers/InjunctionController.js";
import {injunctionInputValidation } from "../middleware/withValidationError.js";
const router = Router();

// Add the correct route path with a leading slash
router.post('/addInjunctions',injunctionInputValidation, addInjunction);
router.get('/getAllInjunctions',getAllInjunctionsController);
// router.patch('/updateInjunction',injunctionInputValidation,updateInjunctionController)
router.route('/:id').get(getInjunctionById).patch(updateInjunctionController).delete(injunctionDeleteController);

export default router;
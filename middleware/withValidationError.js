import {body,param, validationResult } from "express-validator"
import { MyBadRequestError, MyNotFoundError, MyUnauthorizedError } from "../errors/customErrors.js"
import mongoose from "mongoose"
import Scan from '../models/ScanModel.js'
import User from "../models/UserModel.js"
const inputValidationErrors=(validateValues)=>{
    return [
        validateValues,
        (req,res,next)=>{
            const errors=validationResult(req)
            if(!errors.isEmpty()){
                const errorMessages=errors.array().map((error)=>error.msg)
                if(errorMessages[0].startsWith('No scan')){
                    throw new MyNotFoundError(errorMessages)
                }
                if(errorMessages[0].startsWith('You have no permission')){
                    throw new MyUnauthorizedError('You have no permission to access this')
                }
                throw new MyBadRequestError(errorMessages)
            }
            next();
        },
    ]
}
export const registerValidation=inputValidationErrors([
    body('officeId')
    .isEmpty()
    .withMessage('officeId is required')
])

export const idParamValidation=inputValidationErrors(
    [
        param("id").custom(async (value,{ req })=>{
            const isValidId=mongoose.Types.ObjectId.isValid(value)
            if(!isValidId) throw new MyBadRequestError("Invalid Mongodb id")
            const scan=await Scan.findById(value)
            if(!scan) throw new MyNotFoundError('No scan found by this id')
            const isAdmin=req.loggedInUser.userRole==='Admin'
            const isOwner=req.loggedInUser.userId===scan.createdBy.toString()
            if(!isAdmin && !isOwner) throw new MyUnauthorizedError('You have no permission to access this')
        })
    ]
)

export const userRegisterValidation=inputValidationErrors([
    body('userName').notEmpty().withMessage('userName is required'),
    body('userEmail').notEmpty().withMessage('userEmail is required').isEmail().withMessage('Invalid email address').custom(async (userEmail)=>{
        const user=await User.findOne({userEmail})
        if (user) throw new MyBadRequestError('Email already exist')
    }),
    body('userMobile').notEmpty().withMessage('userMobile is required').custom(async (userMobile)=>{
        const user=await User.findOne({userMobile})
        if (user) throw new MyBadRequestError('userMobile already exist')
    }),
    body('userRole').notEmpty().withMessage('userRole is required'),
    body('userOffice').notEmpty().withMessage('userOffice is required'),
    body('userPassword').notEmpty().withMessage('userPassword is required').isLength({min:4}).withMessage('Password must be at least 4 chars')
])

export const userLoginValidation=inputValidationErrors([
    body('userMobile').notEmpty().withMessage('userMobile is required'),
    body('userPassword').notEmpty().withMessage('userPassword is required').isLength({min:4}).withMessage('Password must be at least 4 chars')
])

export const userUpdate=inputValidationErrors([
    body('userName').notEmpty().withMessage('userName is required'),
    body('userEmail').notEmpty().withMessage('userEmail is required').isEmail().withMessage('Invalid email address').custom(async (email)=>{
        const user=await User.findOne({email})
        if (user && user.userId!==req.loggedInUser.userId) throw new MyBadRequestError('Email already exist')
    }),
    body('userMobile').notEmpty().withMessage('userMobile is required').custom(async (userMobile)=>{
        const user=await User.findOne({userMobile})
        if (user && user.userId!==req.loggedInUser.userId) throw new MyBadRequestError('userMobile already exist')
    })
])
export const injunctionInputValidation=inputValidationErrors([
    body('mouzaName').notEmpty().withMessage('mouzaName is required'),
    body('mouzaJlNo').notEmpty().withMessage('mouzaJlNo is required'),
    body('khatiyanNo').notEmpty().withMessage('khatiyanNo is required'),
    body('dagNos').notEmpty().withMessage('dagNos is required'),
    body('objectionType').notEmpty().withMessage('objectionType is required'),
    body('note').notEmpty().withMessage('note is required'),
])
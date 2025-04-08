import { StatusCodes } from 'http-status-codes'
import User from '../models/UserModel.js'
import { hashedPasswordFun,comparePasswordFun } from '../helper/HashPassword.js'
import { MyUnauthenticatedError } from '../errors/customErrors.js'
import { creteJWTFun } from '../helper/JWTToken.js'
import UserRole from '../models/UserRoleModel.js'
export const register=async (req,res)=>{
    const hashedPassword=await hashedPasswordFun(req.body.userPassword)
    req.body.userPassword=hashedPassword
    const userRoleData=await UserRole.findOne({userRole:req.body.userRole})
    const userRoleId=userRoleData._id
    req.body.userRole=userRoleId
    const user=await User.create(req.body)
    res.status(StatusCodes.CREATED).json({user})
}
export const login=async (req,res)=>{
    const user= await User.findOne({userMobile:req.body.userMobile})
    const isValidUser=user && await comparePasswordFun(req.body.userPassword,user.userPassword)
    if(!isValidUser) throw new MyUnauthenticatedError('Invalid mobile no., password')
    const userRoleData=await UserRole.findById(user.userRole)
    if(!userRoleData) throw new MyUnauthenticatedError('User role not found')
    const userRole=userRoleData.userRole
    const jwtTokenToSend=creteJWTFun({
        userId:user._id,
        userRole:userRole
    })
    res.cookie('myCookieName', jwtTokenToSend, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });
    res.status(StatusCodes.OK).json({msg:"User logged in successfully"})
}

export const logout=(req,res)=>{
    res.cookie('myCookieName','logout',{
        httpOnly:true,
        maxAge:0
    })
    res.status(StatusCodes.OK).json({msg:'User logout'})
}
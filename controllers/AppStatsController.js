import { StatusCodes } from "http-status-codes"
import User from '../models/UserModel.js'
import Scan from '../models/ScanModel.js'
import cloudinary from 'cloudinary'
import {promises as fs} from 'fs'
export const getCurrentUser=async (req,res)=>{
    const user=await User.findOne({_id:req.loggedInUser.userId})
    const userWithoutPassword=user.deletePass()
    res.status(StatusCodes.OK).json({userWithoutPassword})
}
export const getTotalUser=async (req,res)=>{
    const totalScan=await Scan.countDocuments()
    const totalUser=await User.countDocuments()
    res.status(StatusCodes.OK).json({TotalScan:totalScan,TotalUser:totalUser})
}
export const updateUser=async (req,res)=>{
    let obj={...req.body}
    delete obj.userPassword
    if(req.file){
        const response=await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        obj.avatar=response.secure_url
        obj.avatarPublicId=response.public_id
    }
//    const oldAvatarId=req.loggedInUser.avatarPublicId
    const updatedUser=await User.findByIdAndUpdate(req.loggedInUser.userId,obj,{
        //new:true, // dot not use new:true if you want to get the old data
    })
    if(req.file && updatedUser.avatarPublicId){
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
    }

    res.status(StatusCodes.OK).json({updatedUser})
}
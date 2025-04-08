import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
    userRole:String,
    userRoleInBangla:String,
},{timestamps:true})

export  default mongoose.model('UserRole',userRoleSchema)
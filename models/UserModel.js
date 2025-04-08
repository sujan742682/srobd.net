import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    userName:String,
    userEmail:String,
    userMobile:String,
    userRole:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserRole"
    },
    userOffice:String,
    userStatus:String,
    userPassword:String,
    avatar:String,
    avatarPublicId:String,
},{timestamps:true})

UserSchema.methods.deletePass=function (){
    let withOutPassObj=this.toObject()
    delete withOutPassObj.userPassword
    return withOutPassObj
}
export default mongoose.model("User",UserSchema) 
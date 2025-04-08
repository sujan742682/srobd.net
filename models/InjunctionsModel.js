import mongoose from "mongoose";

const InjunctionsSchema=new mongoose.Schema({
    mouzaName:String,
    mouzaJlNo:String,
    khatiyanNo:String,
    dagNos:String,
    objectionType:String,
    note:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

export default mongoose.model('Injunctions',InjunctionsSchema)
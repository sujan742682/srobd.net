import mongoose from "mongoose";

const ScanSchema=new mongoose.Schema({
    officeId:String,
    docType:String,
    scannedUrl:String,
    mouzaName:String,
    mouzaJlNo:String,
    khatiyan:String,
    partiesName:String,
    partiesShare:String,
    dags:String,
    landAmount:String,
    shreni:String,
    dakhilaYear:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export default mongoose.model('Scan',ScanSchema)
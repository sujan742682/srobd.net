import { StatusCodes } from "http-status-codes"
import Injunctions from "../models/InjunctionsModel.js";
import { MyNotFoundError } from "../errors/customErrors.js";
export const addInjunction=async (req,res)=>{
    req.body.createdBy=req.loggedInUser.userId
    const createdInjunction=await Injunctions.create(req.body)
    res.status(StatusCodes.OK).json({msg:'injunction added successfully'})
}
export const getAllInjunctionsController=async(req,res)=>{
    const injunctions=await Injunctions.find({})
    res.status(StatusCodes.OK).json({injunctions})
}
export const getInjunctionById=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    
    const singleInjunction=await Injunctions.findById(id)
    if(!singleInjunction) throw new MyNotFoundError('No Injunction Data Found by this Id')
    res.status(StatusCodes.OK).json({singleInjunction})

}
export const updateInjunctionController=async(req,res)=>{
    const {id}=req.params;
    const updatedInjunction=await Injunctions.findByIdAndUpdate(id,req.body,
        {new:true}
    )
    if(!updatedInjunction) throw new MyNotFoundError('No Injunction Data Found by this Id')
    res.status(StatusCodes.OK).json({msg:'Injunction Data Updated Successfully'})
}
export const injunctionDeleteController=async(req,res)=>{
    const {id}=req.params;
    const deletedInjunction=await Injunctions.findByIdAndDelete(id)
    if(!deletedInjunction) throw new MyNotFoundError('No Injunction Data Found by this Id')
    res.status(StatusCodes.OK).json({msg:'Injunction Data Deleted Successfully'})
}
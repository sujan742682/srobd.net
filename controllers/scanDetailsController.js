import Scan from '../models/ScanModel.js'
import { StatusCodes } from 'http-status-codes';
import { MyNotFoundError } from '../errors/customErrors.js';
export const getAllScanDetails=async (req,res)=>{
    const scans=await Scan.find({});
    res.status(200).json({scans})
}
export const getSingleScan=async (req,res)=>{
    const {id}=req.params
    const scan=await Scan.findById(id)
    if(!scan) throw new MyNotFoundError(`No scan record found by this id ${id}`)
    res.status(StatusCodes.OK).json({scan})
}
export const deleteScan=async (req,res)=>{
    const {id}=req.params
    const scan=await Scan.findOneAndDelete({ _id: id })
    if(!scan) throw new MyNotFoundError(`No scan record found by this id ${id}`)
    res.status(StatusCodes.OK).json({scan})
}
export const createScanDetails=async (req,res)=>{
    const {officeId,docType,scannedUrl,mouza,khatiyan,partiesName,dags,landAmount,shreni,dakhilaYear}=req.body
    req.body.createdBy=req.loggedInUser.userId
    const scan=await Scan.create(req.body)
    res.status(StatusCodes.CREATED).json({scan})
}
export const updateScan=async (req,res)=>{
    const {id}=req.params
    const updatedScan=await Scan.findByIdAndUpdate(id,req.body,{
        new:true
    })
    if(!updatedScan) throw new MyNotFoundError(`No scan record found by this id ${id}`)
    res.status(StatusCodes.OK).json({updatedScan})
}
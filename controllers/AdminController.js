import { StatusCodes } from "http-status-codes"
import UserRole from "../models/UserRoleModel.js"
import { MyConflictError } from "../errors/customErrors.js"

export const addUserRole = async (req, res) => {
    const { userRole, userRoleInBangla } = req.body
    const ifRoleExist=await UserRole.findOne({userRole})
    if(ifRoleExist) throw new MyConflictError('This User Role Already Exist')
    const addedUserRole = await UserRole.create({ userRole, userRoleInBangla })
    res.status(StatusCodes.CREATED).json({ msg: 'User Role Created Successfully' })
}
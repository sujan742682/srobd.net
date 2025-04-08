import bcrypt from "bcryptjs";

export const hashedPasswordFun=async (userPassword)=>{
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(userPassword,salt)
    return hashedPassword
}

export const comparePasswordFun=async (userPassword,hashedPassword)=>{
    const isMatch=await bcrypt.compare(userPassword,hashedPassword)
    return isMatch
}
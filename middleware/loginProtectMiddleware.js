import { MyUnauthenticatedError, MyUnauthorizedError } from "../errors/customErrors.js";
import { verifyJWTFun } from "../helper/JWTToken.js";

export const loginProtectionMiddleware=(req,res,next)=>{
    const {myCookieName}=req.cookies
    if(!myCookieName)throw new MyUnauthenticatedError('User unauthenticated')
    try {
        const tokenDataThatWasSendAsJWT=verifyJWTFun(myCookieName)
        const {userId,userRole}=tokenDataThatWasSendAsJWT
        req.loggedInUser={userId,userRole}        
        next();
    } catch (error) {
        throw new MyUnauthenticatedError('User unauthenticated')
    }
    
}

export const checkIsAdmin = (...anyName) => {
    return (req,res,next)=>{
        if(!anyName.includes(req.loggedInUser.userRole)) throw new MyUnauthorizedError('You are not permitted to access this')
        console.log(anyName);
        next()
    }
};

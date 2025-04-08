import jwt from 'jsonwebtoken'

export const creteJWTFun=(dataYouWantToSend)=>{
    const tokenToSend=jwt.sign(dataYouWantToSend,process.env.JWT_SECRETE,{
        expiresIn:process.env.JWT_TOKEN_EXPIRES_IN,
    })
    return tokenToSend;
}

export const verifyJWTFun=(tokenNameThatYouHaveSend)=>{
    const decodedJWTToken=jwt.verify(tokenNameThatYouHaveSend,process.env.JWT_SECRETE)
    return decodedJWTToken;
}
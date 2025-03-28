const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleWare = (req, res, next)=>{
    let token = req.header('authorization')

    if(!token){
        return res.json('token is not present');
    }
try{
    let compareAuth = jwt.verify(token.replace('Bearer ', ""), process.env.JWT_TOKEN);
    req.res = compareAuth;
    next();
}catch(error){
    return res.status(403).json({message:'invalid token'})
}   
}

module.exports = authMiddleWare;

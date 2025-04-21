const user = require('../models/user')
const friends = require('../models/friends')
require('dotenv').config()

const jwt = require('jsonwebtoken')


exports.getFriends = async(req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'Unauthorized', success:false})
    }

    const decode = jwt.verify(token, process.env.JWT_TOKEN)

    const userId = decode.userId;

    

}
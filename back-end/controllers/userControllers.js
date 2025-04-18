const User = require('../models/user')
require('dotenv').config();
const jwttoken = require('jsonwebtoken')


exports.register = async (req, res)=>{
    
    
    console.log("Received Data:", req.body);
    const {username, password, email, phoneno} = req.body;
    const user = await new User({username, password, phoneno,email });
    await user.save();
    res.json(user);

}

exports.login = ( async (req, res)=>{
   
try{
    const {username, password} = req.body;
    console.log(username, password);
    let user = await User.findOne({username});
    if(!user){
        res.json({message:'user is not registered yet'});
    }

    const isMatched = await user.comparePass(password);

    if(isMatched){

        let token =  jwttoken.sign({user}, process.env.JWT_TOKEN, {expiresIn:'1h'});
        res.json({message:'user loggin successful', token:token});

    }
    else{
        res.json({message:'invalid password'});
    }






}catch(error){
    console.error(error)
}
})
const Message = require('../models/messages')

exports.sendMessages = async (req, res)=>{
    let {sender, message} = req.body
    const messages = new Message({sender, message});
    await messages.save();
    res.json(message)


    
}


exports.getMessages = async (req, res)=>{
    let msg = await Message.find({});
    res.json(msg);
}
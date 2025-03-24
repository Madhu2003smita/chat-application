const {Schema, model} = require('mongoose')

const MessageSchema = new Schema({
    sender:{
        type: 'string',
        required: true
    },
    message:{
        type: 'string',
        required : true
    },
    timestamp:{
        type: Date,
        default:  Date.now()
    }
})

module.exports = model('MessageSchema', MessageSchema)
const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    phoneno:{
        type: 'Number',
        required: true
    }
})

module.exports = model('UserSchema', UserSchmea);


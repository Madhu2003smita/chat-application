const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')

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
        type: 'string',
        required: true
    },
    email:{
        type:'string',
        required: true
    }
},{
    versionKey:false,
    timestamps:true
})

UserSchema.pre('save',  async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt );
        next();
    }
    catch(error){
        next(error);
    }
})


UserSchema.methods.comparePass = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = model('UserSchema', UserSchema);


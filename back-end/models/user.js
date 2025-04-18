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
    console.log("Entered Password:", enteredPassword);
    console.log("Stored Hashed Password:", this.password);

    const isMatch = await bcrypt.compare(enteredPassword, this.password);
    
    console.log("Comparison Result:", isMatch);

    return isMatch;
    
}


module.exports = model('UserSchema', UserSchema);


const {Schema, model} = require('mongoose')

const FriendSchema = new Schema({
    userId:{ type: Schema.Types.ObjectId, ref:'User', required:true },
    friendId:{ type: Schema.Types.ObjectId, ref:'User', required:true }

}
)

module.exports = model('Friends', FriendSchema)
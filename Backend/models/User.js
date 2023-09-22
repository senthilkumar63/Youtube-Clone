// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     kind: String,
//     id: Object,
//     videoId : Object,
//     snippet : Object,
//     publishedAt : String,
//     channelId : String,
//     title: String,
//     description : String,
//     thumbnail : Object,
//     default : Object,
//     url : String,
//     // width : Int32,
//     // height : Int32,
//     medium : Object,
//     high : Object,
//     stranded : Object,
//     channelTitle : String,
//     liveBroadcastContent : String,
//     publishTime: String
// })

// const UserModel = mongoose.model("users", UserSchema)
// module.exports = UserModel




const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const {Schema} = mongoose
const UserSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true,
    },
    conformpassword : {
        type: String,
        required : true,
    },
    isAdmin : {
        type: Boolean,
        required : true,
        default: false
    }
},{
    timestamps : true
})
const User = mongoose.model("User", UserSchema)
module.exports = User

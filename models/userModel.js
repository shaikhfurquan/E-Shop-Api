import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    image : {
        type : String,
    },
    countInStock : {
        type : Number,
        required : true
    }
})

const UserModel = mongoose.model('User' , userSchema)

export default UserModel
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
    },
    password: {
        type: String,
        required: true,
        trim : true,
    },
    phone: {
        type: String,
        required: true,
        trim : true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    street: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    }
}, { timestamps: true })

userSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
userSchema.set('toJSON', {
    virtuals: true,
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
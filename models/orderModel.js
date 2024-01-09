import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderItems :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'OderItem',
        required : true,
    }],
    shippingAddress1 : {
        type : String,
        required : true,
    },
    shippingAddress2 : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    zip : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    phone :{
        type : String,
        required : true,
    },
    status :{
        type : String,
        required : true,
        default : 'pending'
    },
    totalPrice :{
        type : Number,
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    dateOrdered :{
        type : Date,
        default : Date.now()
    }
})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
orderSchema.set('toJSON', {
    virtuals: true,
})

const OrderModel = mongoose.model('Order' , orderSchema)

export default OrderModel
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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

const OrderModel = mongoose.model('Order' , orderSchema)

export default OrderModel
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    quantity :{
        type : Number,
        required : true
    },
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    }
})

orderItemSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
orderItemSchema.set('toJSON', {
    virtuals: true,
})
const OrderItemModel = mongoose.model('OrderItem' , orderItemSchema)

export default OrderItemModel
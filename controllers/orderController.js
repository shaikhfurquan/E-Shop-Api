import OrderModel from "../models/orderModel.js"

export const getOrder = async(req,res)=>{
    try {
        const orderItems = await OrderModel.find()
        res.status(200).json({
            success : true,
            orderItems : orderItems
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

export const createOrder = async(req, res, next) => {

    try {
        const {orderItems, shippingAddress1, shippingAddress2, city, zip, country, phone, status, totalPrice, user} = req.body
        const createOrder = await OrderModel.create(orderItems, shippingAddress1, shippingAddress2, city, zip, country, phone, status, totalPrice, user)
        res.status(200).json({
            success : true,
            message : "Product created successfully",
            createOrder : createOrder
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Unable to create product",
            error : error.message
        })
    }
}
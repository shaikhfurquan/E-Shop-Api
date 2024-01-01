import UserModel from "../models/userModel.js"

export const getUser = async(req,res)=>{
    try {
        
        res.status(200).json({
            success : true,
            productList
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

export const createUser = async(req, res, next) => {

    try {
            
        res.status(200).json({
            success : true,
            message : "Product created successfully",
            product
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Unable to create product",
            error : error.message
        })
    }
}
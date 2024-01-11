import CategoryModel from "../models/categoryModel.js";
import ProductModel from "../models/productModel.js";



//create product
export const createProduct = async (req, res) => {
    try {
        //check if the category is exists or not.
        const categoryData = await CategoryModel.findById(req.body.category)
        if (!categoryData) {
            return res.status(400).json({
                success: false,
                message: "Invalid Category..."
            })
        }

        const { name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body
        const product = await ProductModel.create({ name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured })

        if (!product) {
            return res.status(500).json({ 
                success: false,
                message: "Product Cannot Be Created..."
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            product
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable to create product",
            error: error.message
        })
    }
}


//get all products
export const getProducts = async (req, res) => {
    try {
        let filter = {}
        if(req.query.categories) {
            filter = {category : req.query.categories.split(',')}
        }
        const productList = await ProductModel.find(filter).populate('category')

        if (!productList) {
            return res.status(500).json({
                success: false,
                message: "No Product Found..."
            })
        }
        return res.status(200).json({
            success: true,
            productList
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


//getting all products with the specified name and brand and price
export const getShortProductsDetails = async (req, res) => {
    try {
        const productList = await ProductModel.find().select('name brand price image -_id')

        if (!productList) {
            return res.status(500).json({
                success: false,
                message: "No Product Found..."
            })
        }
        return res.status(200).json({
            success: true,
            productList
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//get product by ID
export const getProductByID = async (req, res) => {
    const product = await ProductModel.findById(req.params.id).populate('category')
    console.log(product);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product With This ID Not Found...",
        })
    }
    return res.status(200).json({
        success: true,
        product
    })
}


//update the product by ID
export const updateProductByID = async (req, res) => {
    try {

        //check if the category is exists or not.
        const categoryData = await CategoryModel.findById(req.body.category)
        if (!categoryData) {
            return res.status(400).json({
                success: false,
                message: "Invalid Category..."
            })
        }

        const { name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body
        const product = await ProductModel.findByIdAndUpdate(req.params.id, { name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured }, { new: true })

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Products With This ID Not Found...",
            })
        }

        return res.status(201).json({
            success: true,
            message: "Products Updated Successfully...",
            product
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable To Update product...",
            error: error.message
        })
    }

}


//delete product by Id
export const deleteProductByID = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        if (product) {
            return res.status(200).json({
                success: true,
                message: "Product Deleted Successfully..."
            })
        } else {
            return res.status(404).json({
                success: false,
                message: "Product With This ID Not Found..."
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


//For Admin product count
export const getProductCounts = async (req, res) => {
    try {
        const productCount = await ProductModel.countDocuments({})
        if(!productCount){
            res.status(500).json({
                success: false,
                message : "Unable to get product count"
            })
        }
        return res.status(200).json({
            success: true,
            productCount: productCount
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error while getting product count",
            error: error.message

        })
    }
}

export const featuredProducts = async (req, res) => {
    try {
        const count = req.params.count ? req.params.count : 0
        const featuredProduct = await ProductModel.find({isFeatured : true}).limit(+count)
        if(!featuredProduct){
           return  res.status(500).json({
                success: false,
                message : "Unable to get featured product"
            })
        }
        return res.status(200).json({
            success: true,
            productProduct: featuredProduct
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error while getting product count",
            error: error.message

        })
    }
}

//search api
export const searchProduct = async (req, res) =>{
    try {
        const product = await ProductModel.find({
            "$or" : [
                {name :new {$regex : req.params.key}},
                {isFeatured : {$regex : req.params.key}},
                {brand : {$regex : req.params.key}},
                {price : {$regex : req.params.key}},
                {category : {$regex : req.params.key}},
            ]
        })
        console.log("pro==>",product);
        return res.status(200).json({
            success : true,
            message : "Success",
            product : product
        })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error while searching products",
            error: error.message

        })
    }
}
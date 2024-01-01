import CategoryModel from "../models/categoryModel.js"


//create category
export const createCategory = async (req, res) => {
    try {
        const category = await CategoryModel.create({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        })
        res.status(201).json({
            success: true,
            message: "Category Created Successfully...",
            category
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Unable To Create Product...",
            error: error.message
        })
    }
}


//Get all categories
export const getCategory = async (req, res) => {
    try {
        const categoryList = await CategoryModel.find()

        if (!categoryList) {
            res.status(404).json({
                success: false,
                message: "Category Not Found..."
            })
        }
        res.status(200).json({
            success: true,
            categoryList
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


//get category By ID
export const getCategoryByID = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id)
        if (!category) {
            res.status(404).json({
                success: false,
                message: "Category With This ID Not Found..."
            })
        }
        res.status(200).json({
            success: true,
            category
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}


//update category by ID
export const updateCategory = async (req, res) => {
    try {
        const { name, icon, color } = req.body
        const category = await CategoryModel.findByIdAndUpdate(req.params.id, { name, icon, color } , {new : true})

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category With This ID Not Found...",
            })
        }

        res.status(201).json({
            success: true,
            message: "Category Updated Successfully...",
            category
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Unable To Update product...",
            error: error.message
        })
    }

}


//Delete a category by ID
export const deleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findByIdAndDelete(req.params.id)
        if (category) {
            return res.status(200).json({
                success: true,
                message: "Category Deleted Successfully..."
            })
        } else {
            return res.status(404).json({
                success: false,
                message: "Category With This ID Not Found..."
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}
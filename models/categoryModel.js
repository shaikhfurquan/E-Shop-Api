import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    icon : {
        type : String,
    },
    color : {
        type : String,
    }
})

const CategoryModel = mongoose.model('Category' , categorySchema)

export default CategoryModel

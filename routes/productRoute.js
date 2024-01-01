import express from 'express';
import { createProduct, getProducts, getProductByID, getShortProductsDetails, updateProductByID, deleteProductByID, getProductCounts, featuredProducts } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.post('/create' , createProduct)
productRouter.get('/getproducts' , getProducts)
productRouter.get('/getshortdetails' , getShortProductsDetails)
productRouter.get('/getproduct/:id' , getProductByID)
productRouter.put('/update/:id' , updateProductByID)
productRouter.delete('/delete/:id' , deleteProductByID)
productRouter.get('/get/count' , getProductCounts)
productRouter.get('/get/featured/:count' , featuredProducts)


export default productRouter;
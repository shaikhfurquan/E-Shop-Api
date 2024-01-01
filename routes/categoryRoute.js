import express from 'express';
import { createCategory, deleteCategory, getCategory, getCategoryByID, updateCategory } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.get('/getcategory' , getCategory)
categoryRouter.get('/getcategory/:id' , getCategoryByID)
categoryRouter.post('/create' , createCategory)
categoryRouter.put('/update/:id' , updateCategory)
categoryRouter.delete('/delete/:id' , deleteCategory)


export default categoryRouter;
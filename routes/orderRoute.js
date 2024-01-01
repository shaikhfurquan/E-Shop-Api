import express from 'express';
import { createOrder, getOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/' , getOrder)
orderRouter.post('/create' , createOrder)


export default orderRouter;
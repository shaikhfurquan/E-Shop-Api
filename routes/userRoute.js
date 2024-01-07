import express from 'express';
import { createUser, getUsers, getUserByID, userLogin, getUserCount } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create' , createUser)
userRouter.get('/getusers' , getUsers)
userRouter.get('/getuser/:id' , getUserByID)
userRouter.post('/login' , userLogin)
userRouter.get('/get/count' , getUserCount)


export default userRouter;
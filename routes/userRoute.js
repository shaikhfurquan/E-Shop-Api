import express from 'express';
import { createUser, getUsers, getUserByID, userLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create' , createUser)
userRouter.get('/getusers' , getUsers)
userRouter.get('/getuser/:id' , getUserByID)
userRouter.post('/login' , userLogin)


export default userRouter;
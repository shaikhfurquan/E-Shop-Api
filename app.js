import express  from "express";
import dotenv from 'dotenv';
import connectDB from "./db/connectDB.js";
import cors from 'cors';
import fs from 'fs'
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import authJwt from "./helpers/jwt.js";
import  {errorHandler}  from "./helpers/error-handler.js";


//dotenv setup
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000


//Express Middlewares
app.use(cors())
app.options('*', cors())
app.use(express.json());
app.use(morgan('tiny'))
app.use(authJwt())
//Authentication Error Handeling Middlewares
app.use(errorHandler)


// Get the directory name using fileURLToPath and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });


// setup the logger
app.use(morgan('tiny', { stream: accessLogStream }));


//Routes
app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('/orders',orderRouter)
app.use('/categories',categoryRouter)


//connection of mongodb
connectDB()


//listening port of app
app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
}) 
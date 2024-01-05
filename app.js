import express  from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./db/connectDB.js";
import fs from 'fs'
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import authJwt from "./helper/jwt.js";


//dotenv setup
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000


//Express Middlewares
app.use(express.json());
app.use(cors())
app.options('*', cors())
app.use(morgan('tiny'))
app.use(authJwt)


// Get the directory name using fileURLToPath and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });


// setup the logger
app.use(morgan('tiny', { stream: accessLogStream }));


//Routes
app.use('/product',productRouter)
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/category',categoryRouter)


//connection of mongodb
connectDB()


//listening port of app
app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
}) 
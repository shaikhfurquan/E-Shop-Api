import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


export const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone, isAdmin, street, zip, city, country } = req.body;
        console.log(req.body);

        // Check if user is already registered or not
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already registered..."
            });
        }

        // Check if passwords match
        if (password === confirmPassword) {
            console.log(password, confirmPassword);
            const hashPassword = await bcrypt.hash(password, 10);

            user = await UserModel.create({
                name, email, password: hashPassword, phone, isAdmin, street, zip, city, country
            });

            return res.status(201).json({
                success: true,
                message: "User Registered Successfully",
                user
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "password and confirm password is incorrect",
            });

        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable to create user",
            error: error.message
        });
    }
}


export const userLogin = async (req, res) => {
    try {
        //check if user exists or not
        const user = await UserModel.findOne({ email: req.body.email })

        //if user is not found then
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found, Register first'
            })
        }

        //if user found then we will verify his password
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) return res.status(404).json({
            success: false,
            message: "Invalid Credentials..."
        })

        //if everything ok then we will send the token for the user
        const token = jwt.sign({userId : user.id, isAdmin : user.isAdmin}, process.env.SEC_KEY, { expiresIn: '1h' })

        return res.status(200).json({
            success: true,
            user,
            token,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "All Fields are Required",
            error: error.message
        })
    }
}


export const getUsers = async (req, res) => {
    try {
        // const userList = await UserModel.find().select('name, ema0il , phone')
        const userList = await UserModel.find().select('-password')
        if (!userList) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            userList
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


export const getUserByID = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).select('-password')
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}



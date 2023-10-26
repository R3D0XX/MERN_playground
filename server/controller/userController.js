import { v2 as cloudinary } from "cloudinary"
import userModel from "../models/userModel.js";
import { hashPassword, verifypassword } from "../util/bcyrptEncryption.js";
import { generateToken } from "../util/generateToken.js";


const uploadImage = async (req, res) => {
    // console.log('req.file', req.file)
    try {
        const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
            folder: "profilePictures"
        });
        console.log('uploadedImage', uploadedImage)
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            image: uploadedImage.secure_url
        })
    } catch (error) {
        console.log('error', error)
    }
};

const register = async (req, res) => {
    console.log('req.body', req.body)


    try {
        const hashedPassword = await hashPassword(req.body.password)
        if (hashedPassword) {

            const existingUser = await userModel.findOne({ email: req.body.email })
            if (existingUser) {
                res.status(400).json({
                    success: false,
                    message: "User already exists"
                })
            } else {
                try {
                    const newUser = new userModel({
                        userName: req.body.userName,
                        email: req.body.email,
                        password: hashedPassword,
                        profileImage: req.body.profileImage,
                    });
                    const savedUser = await newUser.save()
                    res.status(201).json({
                        message: "new user registerd",
                        user: {
                            userName: savedUser.userName,
                            email: savedUser.email,
                            userImage: savedUser.userImage
                        }
                    })

                } catch (error) {
                    console.log('error saving user', error)
                    res.status(500).json({
                        success: false,
                        message: "something went wrong with the registration"
                    })
                }
            }



        }

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};


const login = async (req, res) => {
    // console.log('req.body', req.body)
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (!existingUser) {
            res.status(400).json({
                success: false,
                message: "User not found"
            })
        } else {
            try {
                const isMatch = await verifypassword(req.body.password, existingUser.password)
                if (isMatch) {
                    const token = generateToken(existingUser._id);
                    // console.log('token in login function', token)
                    if (token) {
                        res.status(200).json({
                            success: true,
                            message: "Login successful",
                            user: {
                                userName: existingUser.userName,
                                email: existingUser.email,
                                userImage: existingUser.userImage
                            },
                            token
                        })
                    } else {
                        res.status(500).json({
                            success: false,
                            message: "error generating token"
                        })
                    }
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Invalid password"
                    })
                }
            }
            catch (error) {
                console.log('error', error)
                res.status(500).json({
                    success: false,
                    message: "something went wrong"
                })
            }
        }
    }
    catch (error) {
        console.log('error', error)
    }
};
const getProfile = async (req, res) => {
    // console.log("profile route working");
    console.log('req.user', req.user)
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user: {
                userName: req.user.userName,
                email: req.user.email,
                userImage: req.user.userImage,
            }
        })
    }
    if (!req.user) {
        res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
};

export { uploadImage, register, login, getProfile }
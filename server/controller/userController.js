import { v2 as cloudinary } from "cloudinary"
import userModel from "../models/userModel.js";
import { hashPassword } from "../util/bcyrptEncryption.js";


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

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};

export { uploadImage, register };
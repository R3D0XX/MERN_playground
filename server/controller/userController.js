import { v2 as cloudinary } from "cloudinary"
import userModel from "../models/userModel.js";


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
        const newUser = new userModel({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        })
    } catch (error) {

    }
};

export { uploadImage, register };
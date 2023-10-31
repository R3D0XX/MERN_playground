import mongoose from "mongoose"
import memeModel from "../models/memeModel.js ";
import { v2 as cloudinary } from "cloudinary"


const uploadMemes = async (req, res) => {
    try {
        const uploadMemes = await cloudinary.uploader.upload(req.file.path, {
            folder: "memes"
        });
        console.log('uploadMemes', uploadMemes)
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            image: uploadMemes.secure_url
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
};


const getAllMemes = async (req, res) => {
    try {
        const allMemes = await memeModel.find();
        console.log("allMemes", allMemes);
        if
            (allMemes.length < 1) {
            res.status(404).json({ message: "No memes found" });
        } else {
            res.status(200).json({ number: allMemes.length, allMemes: allMemes });
        }

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ error: "something went wrong" })
    }
};

export { getAllMemes, uploadMemes }


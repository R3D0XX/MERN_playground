import mongoose from "mongoose"
import memeModel from "../models/memeModel.js ";

const getAllMemes = async (req, res) => {
    const allMemes = await memeModel.find();
    console.log('allMemes', allMemes),
        res.json({
            number: allMemes.lenght,
            allMemes
        })
};

export { getAllMemes };
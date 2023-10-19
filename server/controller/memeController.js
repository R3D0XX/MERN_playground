import mongoose from "mongoose"
import memeModel from "../models/memeModel.js ";

const getAllMemes = async (req, res) => {
    try {
        const allMemes = await memeModel.find();
        console.log("allMemes", allMemes);
        if
            (allMemes.length < 1) {
            res.status(404).json({ message: "No memes found" });
        } else {
            res.status(200).jason({ number: allMemes.length, allMemes: allMemes });
        }

    } catch (error) {
        console.log('error', error);
        res.status(500).jason({ error: "something went wrong" })
    }
};

export { getAllMemes };


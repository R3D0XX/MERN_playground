import mongoose from "mongoose";

const memeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const memeModel = mongoose.model("meme", memeSchema);
export default memeModel;
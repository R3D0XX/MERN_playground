import mongoose from "mongoose";

const memeSchema = new mongoose.Schema({
    header: {
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
    },
    tags: {
        object: {
            type: String,
            required: false,

            type: String,
            required: false,

            type: String,
            required: false,

            type: String,
            required: false,

            type: String,
            required: false,

            type: String,
            required: false,
        },
    }


});

const memeModel = mongoose.model("meme", memeSchema);

export default memeModel;
import mongoose from "mongoose";

const memSchema = new mongoose.Schema({
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

const memModel = mongoose.model("meme", memSchema);
export default memModel;
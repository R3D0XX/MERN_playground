import mongoose from "mongoose";

const testingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        required: false
    },

    birthyear: {
        type: Number,
        required: true
    },


    age: {
        type: Number,
        required: true
    },

    hobbies: { type: Array, required: false, default: undefined },
});

const testModel = mongoose.model("testing", testingSchema)
export default testModel;
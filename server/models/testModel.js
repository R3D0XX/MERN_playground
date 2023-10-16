import mongoose from "mongoose";

const testingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        latitude: {
            type: Number,
            require: false,
        },
        longitute: {
            type: Number,
            require: false
        },
    },

    likes: {
        type: Number,
        required: false
    },

    Birthyear: {
        type: Number,
        required: true
    },


    age: {
        type: Number,
        required: true
    },

});

const testModel = mongoose.model("testing", testingSchema)
export default testModel;
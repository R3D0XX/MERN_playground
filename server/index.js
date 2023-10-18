import express from "express";
import colors from "colors"
import cors from "cors"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import testModel from "./models/testModel.js";
import memModel from "./models/memModel.js";

dotenv.config();

const router = express.Router();
const app = express();

const addMiddleware = () => {
    app.use(express.json());
    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    )
}

const addRoutes = () => {
    app.use("/api", router)

    // router.get("/testing", async (req, res) => {
    //     const myTesting = await testModel.find();
    //     console.log('myTesting', myTesting);
    //     res.json({
    //         data: myTesting,
    //         info: {
    //             number: myTesting.length,
    //             pages: 1,
    //         },
    //     })
    // });
    router.get("/memes", async (req, res) => {
        const allMemes = await memModel.find();
        console.log('allMemes', allMemes),
            res.json({
                data: allMemes,
                info: {
                    number: allMemes.length,
                    pages: 1,
                },
            })
    });
};


const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connection to DB succesfull'.bgGreen);
    } catch (error) {
        console.log("error connecting to the DB".bgRed, error);
    }
};

const startServer = () => {
    const port = process.env.PORT || 5001

    app.listen(port, () => {
        console.log('Server is running.'.bgGreen, port);
    });
}

(
    async function controller() {
        // Connect to the database
        await DBConnection()

        // Add middleware to the application
        addMiddleware()

        // Add routes to the application
        addRoutes()

        // Start the server
        startServer()
    })();
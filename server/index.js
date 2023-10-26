import express from "express";
import colors from "colors"
import cors from "cors"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import passport from "passport";


import Router from "./routes/memeRoute.js";
import memeRoute from "./routes/memeRoute.js"
import userRoute from "./routes/userRoute.js";
import cloudinaryConfig from "./config/cloudinaryConfig.js";
import passportConfig from "./config/passport.js";
import jwtAuth from "./middlewares/jwtAuth.js";

dotenv.config();

const app = express();

const addMiddleware = () => {
    app.use(express.json());
    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    )
    cloudinaryConfig();
    //* initialize passport
    passport.initialize()
    //* call function that loads our own setup on passport
    passportConfig(passport)
}

const addRoutes = () => {
    app.use("/api", Router)
    app.use("/api/memes", memeRoute);
    app.use("/api/user", jwtAuth, userRoute);
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
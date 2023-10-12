import express from "express";
import colors from "colors"
import cors from "cors"
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const app = express();
const port = process.env.PORT || 5001

app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use("/api", router)
router.get("/test", (req, res) => {
    res.json({
        message: "test route"
    });
});

const DBConnection = async () => {
    // console.log('process.env.DB', process.env.DB)
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connection to DB succesfull'.bgGreen);
    } catch (error) {
        console.log("error connecting to the DB".bgRed, error);
    }
};
DBConnection();


app.listen(port, () => {
    console.log('Server is running.'.bgGreen, port);

});
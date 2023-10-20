import express from "express";
import { uploadImage } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/imageUpload", uploadImage);

export default userRoute;
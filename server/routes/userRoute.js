import express from "express";
import { register, uploadImage } from "../controller/userController.js";
import multerUpload from "../middlewares/multer.js";

const userRoute = express.Router();

userRoute.post("/imageUpload", multerUpload.single("profileImage"), uploadImage);
userRoute.post("/register", register)
export default userRoute;
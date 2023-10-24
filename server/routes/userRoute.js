import express from "express";
import { login, register, uploadImage } from "../controller/userController.js";
import multerUpload from "../middlewares/multer.js";

const userRoute = express.Router();

userRoute.post("/imageUpload", multerUpload.single("profileImage"), uploadImage);
// userRoute.post("/register", multerUpload.single("profileImage"), uploadImage)
userRoute.post("/register", register)
userRoute.post("/login", login)




export default userRoute;
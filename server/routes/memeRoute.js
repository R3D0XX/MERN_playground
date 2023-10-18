import express from "express"
import { getAllMemes } from "../controller/memeController.js"


const Router = express.Router()


Router.get("/all", getAllMemes)

export default Router
import { Router } from "express";
import { addData, getData } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/data').post(addData).get(getData)


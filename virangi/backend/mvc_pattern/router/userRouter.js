import { Router } from "express";
import { submitData } from "../controllers/user.js";

export const userRouter = Router()

userRouter.route('/register').post(submitData)
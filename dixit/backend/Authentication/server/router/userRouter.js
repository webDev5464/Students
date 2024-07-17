import { Router } from "express";
import { login, logOutUser, register, verificationUser, verifyUser } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/').get(verificationUser, verifyUser)
userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/logout').post(logOutUser)

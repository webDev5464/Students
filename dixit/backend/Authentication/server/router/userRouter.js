import { Router } from "express";
import { VerifyUser, login, register, verificationUser } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/token').get(verificationUser, VerifyUser)
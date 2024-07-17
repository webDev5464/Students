import { Router } from "express";
import { login, register } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
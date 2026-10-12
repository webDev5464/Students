import { Router } from "express";
import { edit, login, register } from "../controller/userController.js";

export const userRouter = Router()

userRouter.route("/register").post(register)
userRouter.route('/login').post(login)
userRouter.route("/edit").post(edit)
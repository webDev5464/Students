import { Router } from "express";
import { Userlogin, UserLogout, UserRegister } from "../controllers/users.controllers.js";
import { AutoLogin, userAuthToken } from "../middleware/UserAuthToken.js";


export const userRoute = Router()

userRoute.route("/UserRegister").post(UserRegister)
userRoute.route("/UserLogin").post(Userlogin)
userRoute.route("/UserAuthLogin").get(userAuthToken, AutoLogin)
userRoute.route("/UserLogout").get(UserLogout)
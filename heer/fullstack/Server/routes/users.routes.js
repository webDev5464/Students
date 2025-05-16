import { Router } from "express";
import { Userlogin, UserRegister } from "../controllers/users.controllers.js";


export const  userRoute = Router()

userRoute.route("/UserRegister").post(UserRegister)
userRoute.route("/UserLogin").post(Userlogin)
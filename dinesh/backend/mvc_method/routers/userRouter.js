import { Router } from "express";
import { login, register } from "../controllers/userController.js";

export const userRouters = Router()

userRouters.route('/register').post(register)
userRouters.route('/login').post(login)
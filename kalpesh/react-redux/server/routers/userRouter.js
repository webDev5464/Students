import { Router } from "express";
import { getUser, login, register } from "../controllers/userControllers.js";

export const UserRouter = Router()

UserRouter.route('/register').post(register)
UserRouter.route('/login').post(login)
UserRouter.route('/').get(getUser)
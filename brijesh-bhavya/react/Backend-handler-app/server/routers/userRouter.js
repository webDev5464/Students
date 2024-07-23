import { Router } from "express";
import { register } from "../controllers/userControllers.js";

export const UserRouter = Router()

UserRouter.route('/register').post(register)
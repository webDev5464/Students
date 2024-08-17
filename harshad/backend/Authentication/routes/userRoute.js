import { Router } from "express";
import { register } from "../controllers/userController.js";

export const UserRoute = Router()

UserRoute.route('/register').post(register)
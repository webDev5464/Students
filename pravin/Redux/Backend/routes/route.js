import { Router } from "express";
import { getAllUsers, userRegister } from "../controllers/userControllr.js";

export const UserRoute = Router()

UserRoute.route("/userRegister").post(userRegister)
UserRoute.route("/getUsers").get(getAllUsers)
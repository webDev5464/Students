import { Router } from "express";
import { deleteData, getUserData, updateData, userPostApi } from "../controllers/userControllr.js";

export const UserRoute = Router()

UserRoute.route("/userSubmitData").post(userPostApi)
UserRoute.route("/getUserData").get(getUserData)
UserRoute.route("/deleteData").post(deleteData)
UserRoute.route("/updateData").patch(updateData)
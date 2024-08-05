import { Router } from "express";
import {
  findUser,
  getAllUsers,
  register,
} from "../controllers/userControllers.js";

export const userRouter = Router();

userRouter.route("/register").post(register);
userRouter.route("/getAllUsers").get(getAllUsers);
userRouter.route("/getAllUsers/:fullname").get(findUser);

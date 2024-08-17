import { Router } from "express";
import {
  deleteUser,
  findUser,
  getAllUsers,
  register,
  updateUser,
} from "../controllers/userControllers.js";

export const userRouter = Router();

// register user
userRouter.route("/register").post(register);

// get all users
userRouter.route("/getAllUsers").get(getAllUsers);

// get user by fullname using params
userRouter.route("/getAllUsers/:fullname").get(findUser);

// user na data update karva mate.
userRouter.route("/updateUser").patch(updateUser);

// delete user
userRouter.route("/deleteUser").delete(deleteUser)
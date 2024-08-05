import { Router } from "express";
import {
  login,
  logout,
  register,
  verificationUser,
  verifyUser,
} from "../controllers/userController.js";

export const userRouters = Router();

userRouters.route("/register").post(register);
userRouters.route("/login").post(login);
userRouters.route("/tokenVerification").get(verificationUser, verifyUser);
userRouters.route("/logout").get(logout)
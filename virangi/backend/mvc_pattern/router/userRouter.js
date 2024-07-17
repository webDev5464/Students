import { Router } from "express";
import { deleteUser, getUserData, submitData, updateUser } from "../controllers/user.js";

export const userRouter = Router()

userRouter.route('/').post(submitData).get(getUserData)
userRouter.route('/update').post(updateUser)
userRouter.route('/delete/:id').post(deleteUser)
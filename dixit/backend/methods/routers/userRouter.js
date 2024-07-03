import { Router } from "express";
import { deleteData, getUserData, updateUserData, userAddData } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/userData').post(userAddData).get(getUserData).delete(deleteData).patch(updateUserData)
// userRouter.route('/getAllUsers').get(getUserData)

// userRouter.route('/deleteUserData/:id').delete(deleteData)
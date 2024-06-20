import { Router } from "express";
import { addData, getData, removeData, updateData } from "../controllers/userControllers.js";

export const userRouter = Router()

userRouter.route('/data').post(addData).get(getData)
userRouter.route('/removeData/:id').delete(removeData)
userRouter.route('/updateData/:_id').put(updateData)
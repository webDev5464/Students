import { Router } from "express";
import { deleteUser, getData, postData, updateUser } from "../controllers/handler.js";

export const router = Router()

router.route("/").get(getData).post(postData)
router.route("/update").post(updateUser)
// router.route("/delete:id").delete(deleteUser)
router.route("/delete").post(deleteUser)
// router.route("/register").get(getData).post(postData)
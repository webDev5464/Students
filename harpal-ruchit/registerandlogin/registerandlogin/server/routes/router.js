import { Router } from "express";
import { getData, loginData, postData, userValidation, verifyLogin } from "../controllers/registerData.js";

export const router = Router();

router.route("/").post(postData).get(getData)
router.route("/login").post(loginData)
router.route('/token').get(verifyLogin, userValidation)
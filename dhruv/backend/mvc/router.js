import { Router } from "express";
import { getApi, postApi } from "./controller.js";

export const router = Router()

router.route("/getMyApi").get(getApi)
router.route("/postMyApi").post(postApi)
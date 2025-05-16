import { Router } from "express";
import { getMethod, postMethod, putMethod } from "../controllers/apiControl.js";

export const myRoute = Router()

myRoute.route("/data").post(postMethod).get(getMethod)
myRoute.route("/update").post(putMethod)
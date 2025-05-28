import { Router } from "express";
import { AdminLogin } from "../controllers/admin.controllers.js";

export const AdminRoute = Router()

AdminRoute.route("/login").post(AdminLogin)
import { Router } from "express";
import { UserRegister ,UserLogin} from "../controllers/User.controller.js";
const UserRouter = Router();

UserRouter.route("/register").post(UserRegister);
UserRouter.route("/login").post(UserLogin);

export default UserRouter;

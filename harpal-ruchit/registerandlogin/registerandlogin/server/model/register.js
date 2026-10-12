import { model, Schema } from "mongoose";

export const $register = model(
    "register", Schema({
        name: String,
        username : String,
        email: String,
        password: String,
        conPass: String,
        isLogin : {type: String, default: ""}
    })
)
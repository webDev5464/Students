import { model, Schema } from "mongoose";

export const $users = model(
    "user", Schema({
        fName: { type: String },
        lName: { type: String },
        email: { type: String },
        password: { type: String },
        username: { type: String },
        role: { type: String, default: "user" },
        token: { type: String, default: "Not Login" },
        adminToken: { type: String, default: "Not Admin" },
    })
)
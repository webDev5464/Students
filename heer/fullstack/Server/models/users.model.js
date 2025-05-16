import { model, Schema } from "mongoose";

export const $users = model(
    "user",Schema({
        fname:{ type : String },
        lname:{ type : String },
        email:{ type : String },
        password:{ type : String },
        username:{ type : String }


    
    })
)
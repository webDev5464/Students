import { hash } from "bcrypt"
import { UserModel } from "../models/userModel.js"

export const userRegister = async (req, res) => {
    try {
        const { username, email, password, conPass } = req.body
        if (!username || !email || !password || !conPass) throw { type: "Error", message: "Please fill all fields" }

        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] })

        if (existingUser) throw new Error("This username, email is already taken...")

        if (password != conPass) throw new Error("password and confirm password not match...")

        //* npm i bcrypt
        UserModel({ username, email, password: await hash(password, 10) }).save()

        res.status(200).send("User register successfully...")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}

export const getAllUsers = async (req, res) => res.send(await UserModel.find())

// username or email, password

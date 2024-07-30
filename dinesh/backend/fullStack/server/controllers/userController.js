import { $userModel } from "../models/userModel.js"
import bycrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { fullname, username, email, pass, conPass } = req.body

        if (!fullname || !username || !email || !pass || !conPass) throw new Error('All field are reqired.')

        const existUser = await $userModel.findOne({ $or: [{ username }, { email }] })

        if (existUser) throw new Error("User Already register")

        if (pass !== conPass) throw new Error("Password and confirm password not match.")

        const hashpass = await bycrypt.hash(pass, 5)

        await $userModel({ fullname, username, email, pass: hashpass }).save()
        res.status(200).send({
            process: true,
            message: "User Register sucessfully"
        })
    } catch (err) {
        res.status(401).send({
            process: false,
            msg: err.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { username, email, pass } = req.body
        const findUser = await $userModel.findOne({ $or: [{ username }, { email }] })

        if (!findUser) throw new Error("User not register")

        const checkPass = await bycrypt.compare(pass, findUser.pass)

        if (!checkPass) throw new Error("wrong password")

        res.status(200).send({
            process: true,
            msg: "Login sucessfully"
        })
    } catch (err) {
        res.status(401).send({
            process: false,
            msg: err.message
        })
    }
}

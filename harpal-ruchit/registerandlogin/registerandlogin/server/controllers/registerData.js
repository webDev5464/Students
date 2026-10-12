import { compare, hash } from "bcrypt";
import { $register } from "../model/register.js";
import jwt from 'jsonwebtoken'

export const postData = async (req, res) => {
    try {
        const { name, username, email, password, conPass } = req.body
        if (!name || !username || !email || !password || !conPass) throw "Please fill all the fields"

        const findUser = await $register.findOne({ username })
        if (findUser) throw "User already exists"

        if (password !== conPass) throw "Password does not match"

        await $register({ name, username, email, password: await hash(password, 10) }).save();
        res.status(200).send({
            msg: "data saved"
        })
    } catch (error) {
        res.status(300).json({ msg: error })
    }
}


export const loginData = async (req, res) => {
    try {
        const { username, password } = req.body;

        const findUser = await $register.findOne({ username });
        if (!findUser) throw "User not found";

        const checkPass = await compare(password, findUser.password)
        if (!checkPass) throw "Incorrect password"

        const genToken = jwt.sign({ userId: findUser._id }, 'secureKey', { expiresIn: '10s' })

        res.status(200).cookie('loginToken', genToken, { httpOnly: true, secure: false }).json({
            process: true,
            msg: "Login successful",
            data: findUser
        })
    } catch (error) {
        res.status(300).json({ msg: error })
    }
}

export const verifyLogin = async (req, res, next) => {
    try {

        const token = req.cookies.loginToken
        const checkToken = jwt.verify(token, 'secureKey')
        req.userId = checkToken.userId

        next()
    } catch (error) {
        console.log(error)
        res.status(300).json({ msg: error })
    }
}

export const userValidation = async (req, res) => {
    try {
        const id = req.userId
        console.log(id)
        res.status(200).send({
            process: true,
            msg: 'Auto Login...',
            data: await $register.findById(id)
        })
    } catch (error) {
        res.status(300).json({ msg: error })
    }
}

export const getData = async (req, res) => {
    try {
        const findData = await $register.find();
        res.status(200).json(findData)
    } catch (error) {
        res.status(300).json({ msg: "data not found" })
    }
}
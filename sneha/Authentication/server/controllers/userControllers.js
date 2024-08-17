import { $userModel } from "../models/registerModel.js"
//! npm i bcryptjs
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    const { fullname, username, pass, conPass, email } = req.body
    if (!fullname || !username || !pass || !conPass || !email) throw new Error("All fields are required.")
    if (pass.length < 6) throw new Error("password minimum 6 digits required.")
    if (pass !== conPass) throw new Error("Password and confirm password not match!")

    const hashPass = await bcrypt.hash(pass, 10)

    const findUser = await $userModel.findOne({ $or: [{ username }, { email }] })

    if (findUser) throw new Error("Username or email already exist!")

    const response = await $userModel({ fullname, username, pass: hashPass, email }).save()

    res.status(200).send({
      process: true,
      message: "Register success!",
      data: response
    })

  } catch (e) {
    res.status(200).send({
      process: false,
      message: e.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const { username, email, pass } = req.body
    if (!username && !email) throw new Error("username/email is required!")
    if (!pass) throw new Error("Password is required!")

    const findUser = await $userModel.findOne({
      $or: [{ username }, { email }]
    })

    if (!findUser) throw new Error("User is not exist")
    const checkPass = await bcrypt.compare(pass, findUser.pass)

    if (checkPass) {

      const createToken = jwt.sign({ id: findUser._id }, process.env.tokenKey, { expiresIn: '5m' })
      await $userModel.findByIdAndUpdate(findUser._id, { token: createToken })

      const cookieExpireTime = 5 * 60 * 1000;

      res.cookie('userCookie', createToken, { maxAge: cookieExpireTime, httpOnly: true }).status(200).send(
        {
          process: true,
          message: "Login success!",
          data: findUser
        }
      )

    } else {
      throw new Error("Password is incorrect!")
    }
  } catch (e) {
    res.send({
      process: false,
      message: e.message
    })
  }
}

export const verificationUser = (req, res, next) => {
  try {
    const token = req.cookies.userToken
    if (!token) throw "Token not found"
    const verifyToken = jwt.verify(token, 'secureToken')
    console.log('78', verifyToken);
    req.userId = verifyToken.id

    next()
  } catch (err) {
    console.log(err.message);
  }
}

export const VerifyUser = async (req, res) => {
  try {
    let id = req.userId
    console.log(84, id);
    let data = await $userModel.findById(id)
    res.send({ msg: 'verified', data, success: true })
  } catch (msg) {
    console.log(msg.message);
  }
}

// npm i jsonwebtoken cookie-parser

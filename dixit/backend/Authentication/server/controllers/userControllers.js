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

      const cookieExpireTime = 1 * 60 * 1000

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
    const token = req.cookies.userCookie
    if (!token) throw new Error("Token not found")
    const verifyToken = jwt.verify(token, process.env.tokenKey)
    if (!verifyToken) throw new Error("Token is invalid")
    req.userVerifyId = verifyToken.id

    next()
  } catch (err) {
    res.send({
      process: false,
      message: err.message
    })
  }
}

export const verifyUser = async (req, res) => {
  try {
    const id = req.userVerifyId

    if (!id) throw new Error("User not verified")

    const findUser = await $userModel.findById(id)

    res.send({
      process: true,
      message: "User verified!",
      userData: findUser
    })

  } catch (err) {
    res.send({
      process: false,
      message: err.message
    })
  }
}

export const logOutUser = async (req, res) => {
  res.clearCookie('userCookie')
  res.status(200).send({ message: 'User logged out successfully' });
}

// npm i jsonwebtoken cookie-parser

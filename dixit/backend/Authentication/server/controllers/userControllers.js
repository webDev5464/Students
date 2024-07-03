import { $userModel } from "../models/registerModel.js"
//! npm i bcryptjs
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
      const createToken = jwt.sign({ id: findUser._id }, 'secureToken', { expiresIn: '5m' })

      res.cookie('userToken', createToken, { httpOnly: true }).status(200).send(
        {
          process: true,
          message: "Login success!",
          userInfo: await $userModel.findByIdAndUpdate(findUser._id, { token: createToken }),
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
  const token = req.cookies.userToken
  const verifyToken = jwt(token, 'secureToken')

  console.log(75, verifyToken);
  req.userSecure = verifyToken
  console.log(74, token);
  next()
}

export const VerifyUser = async (req, res) => {
  try {
    let id = req.userid
    console.log(84, id);
    let user = await $userModel.findById(id)
    res.send({ msg: 'verified', user, success: true })
  } catch (msg) {
    console.log(msg.message);
  }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGVkMzRjMTBlNjQ2M2QxZjRmODJkYiIsImlhdCI6MTcxOTgzNDE3OCwiZXhwIjoxNzE5OTIwNTc4fQ.0UogdQj_QB4UALFtDuX8BzW2hT94xU0I3HWX5k4ixHw
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2U0ZmRjOTg4ZGRlZmViMDAzMmJhNSIsImlhdCI6MTcxOTgzNTE2NSwiZXhwIjoxNzE5ODM1NDY1fQ.mM-VTbNIRHxKBvodnzf-ytmsGZTV5nOBNmPmIjqY_cM
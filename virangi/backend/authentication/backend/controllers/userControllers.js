import { $UserModel } from "../models/userModel.js"
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { fullname, email, username, pass, conPass } = req.body

    if (!fullname || !email || !username || !pass || !conPass) throw new Error('All field is required.')

    const findUser = await $UserModel.findOne({ $or: [{ username }, { email }] })

    if (findUser) throw new Error("Username/email is already exist")

    if (pass !== conPass) throw new Error('Password and conform password not match.')

    const hashPass = await bcrypt.hash(pass, 10)

    await $UserModel({ fullname, email, username, pass: hashPass }).save()

    res.status(200).send({
      process: true,
      message: 'Register successfull. Please login to continue.'
    })

  } catch (err) {
    res.status(401).send({
      process: false,
      message: err.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const { username, email, pass } = req.body

    const findUser = await $UserModel.findOne({ $or: [{ username }, { email }] })

    if (!findUser) throw new Error('User not found')

    const checkPass = await bcrypt.compare(pass, findUser.pass)

    res.status(200).send({
      process: true,
      message: 'Login successfull.',
      data: findUser
    })

  } catch (err) {
    res.status(401).send({
      process: false,
      message: err.message
    })
  }
}

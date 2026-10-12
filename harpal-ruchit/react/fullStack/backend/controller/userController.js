import { compare, hash } from "bcrypt"
import { $user } from "../model/userData.js"

export async function register(req, res) {
  try {
    const { username, email, pass, conPass } = req.body
    if (!username || !email || !pass || !conPass) throw "Inputs Requerd"

    const findUser = await $user.findOne({ username })

    if (findUser) throw "User Exist"

    if (pass !== conPass) throw "Wrong pass"

    await $user({ username, email, pass: await hash(pass, 5) }).save()

    res.status(200).send({
      process: true,
      msg: "Register"
    })
  } catch (e) {
    res.status(300).send({
      process: false,
      msg: e
    })
  }
}

export async function login(req, res) {
  try {
    const { email, pass } = req.body

    const findUser = await $user.findOne({ email })

    if (!findUser) throw "User not register"

    const checkPass = await compare(pass, findUser.pass)

    if (!checkPass) throw "Wrong Password"

    res.status(200).send({
      process: true,
      msg: "Login successfully...",
      userData: findUser
    })
  } catch (e) {
    res.status(300).send({
      process: false,
      msg: e
    })
  }
}

export async function edit(req, res) {
  try {
    const { _id, username } = req.body

    const findUser = await $user.findByIdAndUpdate(_id, { username }, { new: true })

    res.status(200).send({
      process: true,
      msg: "Username change",
      userData: findUser
    })
  } catch (e) {
    res.status(300).send({
      process: false,
      msg: e
    })
  }
}
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'
import { $users } from "../models/users.model.js";

export async function AdminLogin(req, res) {
  try {
    const { username, password } = req.body;
    if (!username) throw new Error('Username is required');
    if (!password) throw new Error('Password is required');
    const user = await $users.findOne({ username });
    if (!user) throw new Error('User not found');
    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new Error('Invalid password');
    console.log(user)

    const generatedToken = jwt.sign({ userId: user._id }, "adminSecureToken", { expiresIn: "10m" })
    await $users.updateOne({ _id: user._id }, { $set: { adminToken: generatedToken } })

    res.status(201).cookie("AdminToken", generatedToken, { httpOnly: true, secure: true }).send({
      process: true,
      message: "Admin login successfully",
      userData: user
    })
  } catch (err) {
    res.status(301).send({
      process: false,
      message: err.message
    })
  }
}
import { $userModel } from "../models/userModels.js";
import bcrypt, { hash } from "bcrypt";

export const register = async (req, res) => {
  try {
    const { fullName, username, email, pass, conPass } = req.body;
    if (!fullName) throw new Error("Full name is required.");
    if (!username) throw new Error("Username name is required.");
    if (!email) throw new Error("Email is required.");
    if (!pass) throw new Error("Password is required.");
    if (!conPass) throw new Error("Confirm password is required.");

    const existUser = await $userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existUser) throw Error("User already registered.");

    if (pass !== conPass)
      throw new Error("Password and confirm password not match.");

    await $userModel({
      fullName,
      username,
      email,
      pass: await bcrypt.hash(pass, 10),
    }).save();

    res.status(200).send({
      process: true,
      msg: "User register successfully",
    });
  } catch (err) {
    res.send({
      process: false,
      msg: err.message,
    });
  }
};

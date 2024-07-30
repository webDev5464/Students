import { $userModel } from "../models/userModels.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

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

    if (pass >= conPass) {

    }
    
    if (pass !== conPass)
      throw new Error("Password and confirm password not match.");

    await $userModel({
      fullName,
      username,
      email,
      pass: await hash(pass, 10),
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

export const login = async (req, res) => {
  try {
    const { validationName, pass } = req.body;

    if (!validationName) throw new Error("Username/Email is required.");
    if (!pass) throw new Error("Password is required.");

    const findUser = await $userModel.findOne({
      $or: [{ email: validationName }, { username: validationName }],
    });

    if (!findUser) throw new Error("User not found.");

    const checkPass = await compare(pass, findUser.pass);

    if (!checkPass) throw new Error("Password is incorrect");

    // await $userModel.findByIdAndUpdate(findUser._id, {
    //   token: jwt.sign({ userId: findUser._id }, "userSecureKey", {
    //     expiresIn: "2m",
    //   }),
    //   loginDate: Date.now(),
    // });

    res.send({
      process: true,
      msg: "Login successfully",
      UserData: await $userModel.findById(findUser._id),
    });
  } catch (err) {
    res.send({
      process: false,
      msg: err.message,
    });
  }
};

export const getUser = (req, res) => res.send($userModel.find());

import { $userModel } from "../models/userModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, username, email, pass, conPass } = req.body;

    if (!fullname || !username || !email || !pass || !conPass)
      throw new Error("All field are reqired.");

    const existUser = await $userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existUser) throw new Error("User Already register");

    if (pass !== conPass)
      throw new Error("Password and confirm password not match.");

    const hashpass = await bycrypt.hash(pass, 5);

    await $userModel({ fullname, username, email, pass: hashpass }).save();
    res.status(200).send({
      process: true,
      message: "User Register sucessfully",
    });
  } catch (err) {
    res.status(400).send({
      process: false,
      msg: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { validation, pass } = req.body;
    const findUser = await $userModel.findOne({
      $or: [{ username: validation }, { email: validation }],
    });

    if (!findUser) throw new Error("User not register");

    const checkPass = await bycrypt.compare(pass, findUser.pass);

    if (!checkPass) throw new Error("wrong password");

    const generateToken = jwt.sign(
      { userid: findUser._id },
      process.env.tokenKey,
      { expiresIn: "2m" }
    );

    const updatedUser = await $userModel.findByIdAndUpdate(findUser._id, {
      token: generateToken,
    });

    res
      .status(200)
      .cookie("MyToken", generateToken, { httpOnly: true })
      .send({
        process: true,
        msg: "Login sucessfully",
        userData: await $userModel.findById(findUser._id),
      });
  } catch (err) {
    res.status(401).send({
      process: false,
      msg: err.message,
    });
  }
};

//* middleware function

export const verificationUser = async (req, res, next) => {
  try {
    const tokenReq = req.cookies.MyToken;
    const userValidation = jwt.verify(tokenReq, process.env.tokenKey);

    req.userId = userValidation.userid;

    next();
  } catch (err) {
    res.status(401).send({
      process: false,
      msg: err.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const user = req.userId;
    const findUser = await $userModel.findById(user);

    res.status(200).send({
      process: true,
      msg: "User verified",
      userData: findUser,
    });
  } catch (err) {
    res.status(401).send({
      process: false,
      msg: err.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("MyToken");

    res.status(200).send({
      process: true,
      msg: "Logged out successfully",
    });
  } catch (err) {
    res.status(401).send({
      process: false,
      msg: err.message,
    });
  }
};

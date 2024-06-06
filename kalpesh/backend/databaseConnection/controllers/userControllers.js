import mongoose from "mongoose"
import { userModel } from "../models/userModel.js"

export const addData = async (req, res) => {
  const { fname, lname, age } = req.body

  userModel({ fname, lname, age }).save()

  res.send(["Data Added", { fname, lname, age }])
}

export const getData = async (req, res) => {
  try {
    res.send(await userModel.find())
  } catch (err) {
    console.log(err.message);
  }
}

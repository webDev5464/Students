import { $userModel } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { fname, lname, age } = req.body;

    if (!fname || !lname || !age) throw new Error("All fields are required");

    await $userModel({ fname, lname, age }).save();

    res.send({
      message: "Register Successfully",
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

export async function getAllUsers(req, res) {
  const allUsers = await $userModel.find();
  res.send(allUsers);
}

export const findUser = async (req, res) => {
  const { fullname } = req.params;

  const user = await $userModel.findOne({ fname: fullname });

  res.send(user);
};

export const updateUser = async (req, res) => {
  const { id, lname } = req.body;
  // const findUser = await $userModel.findById(id);
  const findUserAndUpdate = await $userModel.findByIdAndUpdate(id, { lname });
  console.log(findUserAndUpdate);
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  await $userModel.findByIdAndDelete(id);
};
  
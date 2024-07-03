import { $UserModel } from "../models/userModel.js"

export const userAddData = async (req, res) => {
  try {
    const { fname, lname } = req.body

    if (!fname || !lname) throw new Error("Input field is required")

    const findUser = await $UserModel.findOne({ fname })
    console.log(findUser);

    if (findUser == null) {
      await $UserModel({ fname, lname }).save()

      res.status(200).send({
        message: "Data add successfully"
      })
    } else {
      throw new Error("This user is already exist.")
    }
  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message,
    })
  }
}

export const getUserData = async (req, res) => res.send(await $UserModel.find({}))

export const deleteData = async (req, res) => {
  try {
    // const { id } = req.params

    const { id } = req.body
    if (!id) throw new Error("Id is required")

    const findUser = await $UserModel.findByIdAndDelete(id)
    console.log(findUser);

    if (findUser) {
      res.status(200).send({
        message: "Data deleted successfully"
      })
    } else {
      throw new Error("User not found!")
    }

    // console.log(findUser);

    // await $UserModel.findByIdAndDelete({ _id: id })

  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message
    })
  }
}

export const updateUserData = async (req, res) => {
  try {
    const { id, fname, lname } = req.body

    if (!id) throw new Error("id is required")

    const findUser = await $UserModel.findByIdAndUpdate(id, { fname, lname })

    if (findUser) {
      res.status(200).send({
        process: true,
        message: "Data Updated",
        data: await $UserModel.findById(id)
      })
    } else {
      res.status(400).send({
        process: false,
        message: "User not found!"
      })
    }

  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message
    })
  }
}

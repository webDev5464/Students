import { $Data } from "../models/dataModel.js"

export const postMethod = async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body
    const findUser = await $Data.findOne({ username })

    // findById(), find(), findOne(), findByIdAndUpdate(), findByIdAndRemove(), updateOne(), updateMany(), deleteOne(), deleteMany(), countDocuments(), distinct(), aggregate(), count(), estimatedDocumentCount()

    if (findUser) throw new Error("User already exists")
    if (!firstName) throw new Error("First name is required")
    if (!lastName) throw new Error("Last name is required")
    if (!username) throw new Error("Username is required")

    await $Data({ firstName, lastName, username }).save()

    res.status(200).send({
      process: true,
      message: "Data saved successfully",
    })
  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message
    })
  }
}

export const getMethod = async (req, res) => {
  try {
    res.status(200).send({
      process: true,
      message: await $Data.find()
    })
  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message
    })
  }
}

export const putMethod = async (req, res) => {
  try {
    const { id, username } = req.body
    console.log(id)
    const findUser = await $Data.findByIdAndUpdate(id, { username }, { new: true })
    if (!findUser) throw new Error("User not found")

    res.status(200).send({
      process: true,
      message: findUser,
    })
  } catch (err) {
    res.status(400).send({
      process: false,
      message: err.message
    })
  }
}

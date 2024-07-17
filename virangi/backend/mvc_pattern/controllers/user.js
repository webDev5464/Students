import { $userModel } from "../models/userModel.js"

export const submitData = async (req, res) => {
  try {
    const { fname, lname, age } = req.body

    const findUser = await $userModel.findOne({ fname })

    if (findUser !== null) throw new Error("User already exist")

    if (!fname) throw new Error("Fist name is required")

    await $userModel({ fname, lname, age }).save()

    res.send("Data submitted")
  } catch (err) {
    res.status(400).send(err.message)
  }
}

export const getUserData = async (req, res) => res.send(await $userModel.find())

export const updateUser = async (req, res) => {
  const { id, fname, lname, age } = req.body

  const update = await $userModel.findByIdAndUpdate({ _id: id }, { fname, lname, age })

  console.log(update)
}

export const deleteUser = async (req, res) => {
  // const { id } = req.body
  const { id } = req.params

  const deleteData = await $userModel.findByIdAndDelete({ _id: id })

  res.send(deleteData)
}

// db.collectionName.updateOne(
//   { _id: ObjectId("document_id") },
//   { $set: { key: "new_value" } }
// )

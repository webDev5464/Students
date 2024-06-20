import { userModel } from "../models/userModel.js"

export const addData = async (req, res) => {
  try {
    const { fname, lname, age } = req.body

    if (!fname || !lname || !age) throw new Error("All fields is required")

    const existingData = await userModel.findOne({ fname })
    // console.log(existingData);
    // res.send(existingData)

    if (existingData == null) {
      userModel({ fname, lname, age }).save()
      // res.send("Data added")

      // res.send(["Data added", { data: await userModel.findOne({ fname }) }])

      res.send(["Data Added", { fname, lname, age }])
    } else {
      res.send("User already exist")
    }
  } catch (err) {
    res.send({
      success: false,
      message: err.message
    })
  }
}

export const getData = async (req, res) => {
  const findData = await userModel.find()
  res.send(findData)
}

export const removeData = async (req, res) => {
  const { id } = req.params
  const response = await userModel.findByIdAndDelete({ _id: id })

  if (response !== null) {
    res.send({ success: true, message: "Data remove successfully" })
  } else {
    res.send({ success: false, message: "Data does not exist." })
  }
}

export const updateData = async (req, res) => {
  const paramsId = req.params
  const updateData = await userModel.findByIdAndUpdate(paramsId, req.body)
  console.log(updateData);
}

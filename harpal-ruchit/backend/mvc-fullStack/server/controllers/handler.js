import { $data } from "../modules/data.js"

export const getData = async (req, res) => {
  try {

    res.status(200).send(await $data.find())
  } catch (err) {
    console.log(err)
  }
}

export const postData = async (req, res) => {
  try {
    const { fname, lname } = req.body

    if (!fname) throw "First name is require"
    if (!lname) throw "LAst name is require"

    await $data({ fname, lname }).save()

    res.status(200).send({
      success: true,
      msg: "Data is submitted"
    })
  } catch (err) {
    res.status(301).send({
      success: false,
      msg: err
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id, fname } = req.body

    const findUser = await $data.findById(id)

    // const findUser = await $data.findOne({ fname })

    // const findAndUpdate = await $data.findByIdAndUpdate(id, { fname }, { new: true })

    // const findAndUpdate = await $data.updateOne({ fname }, { $set: { fname } }, { new: true })

    // const findDelete = await $data.findByIdAndDelete(id)
    // const findDelete = await $data.findOneAndDelete({ fname })

    console.log(findUser)
  } catch (err) {
    res.status(301).send({
      success: false,
      msg: err
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    console.log("Chagan")
    // const { id } = req.params
    const { id } = req.body
    console.log(req.body)
    await $data.findByIdAndDelete(id)
  } catch (err) {
    res.status(301).send({
      success: false,
      msg: err
    })
  }
}
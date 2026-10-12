import { $data } from "./index.js"

export const postData = async (req, res) => {
  try {
    const { heading, title } = req.body

    await $data({ heading, title }).save()

    res.status(200).send({ process: true, msg: "Data Submitted" })
  } catch (err) {
    res.status(300).send({ process: false, msg: err })
  }
}

export const getData = async (req, res) => res.status(200).send(await $data.find())

export const deleteData = async (req, res) => {
  try {
    const { id } = req.body

    await $data.findByIdAndDelete({ _id: id })

    res.status(200).send({ process: true, msg: "Data Deleted" })
  } catch (err) {
    res.status(300).send({ process: false, msg: err })
  }
}

export const editData = async (req, res) => {
  try {
    const { editUserId, data: { heading, title } } = req.body

    await $data.findByIdAndUpdate({ _id: editUserId }, { heading, title }, { new: true })

    res.status(200).send({ process: true, msg: "Data Edited" })
  } catch (err) {
    res.status(300).send({ process: false, msg: err })
  }
}
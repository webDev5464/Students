const { userModel } = require("../models/dataModel");

const addNewUserData = async (req, res) => {
  try {
    const { fname, lname, age, title, price } = req.body

    if (!fname, !lname, !age, !title, !price) throw "Input field is require..."

    if (fname, lname, age, title, price) {

      res.send({
        process: true,
        msg: "Data save successfully"
      })

      await userModel({
        fname, lname, age, title, price
      }).save()
    }

  } catch (err) {
    res.send({
      process: false,
      msg: err
    })
  }
}

const deleteData = async (req, res) => {
  const { id } = req.body
  await userModel.findByIdAndDelete(id)
}

const getAllData = async (req, res) => res.send(await userModel.find({}))

module.exports = {
  addNewUserData,
  getAllData,
  deleteData
}

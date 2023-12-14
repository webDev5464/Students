const userModel = require("../models/userModel")

const deleteData = async (req, res) => {
  const paramsId = req.params.userId

  const result = await userModel.findByIdAndDelete(paramsId)

  result ? res.send({
    success: true,
    message: "Data Deleted",
    result: userModel
  }) : res.send({
    success: false,
    message: "Not Match id"
  })
}

module.exports = deleteData
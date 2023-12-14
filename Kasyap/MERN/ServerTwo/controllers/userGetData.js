const userModel = require("../models/userModel")

const userGetData = async (req, res) => {
  const newData = await userModel.find({})

  console.log(newData);

  if (newData) {
    res.send({ success: true, message: "Get Data Successfully", userModel: newData })
  } else {
    res.send({ success: false, message: "Something wrong" })
  }
}

module.exports = userGetData

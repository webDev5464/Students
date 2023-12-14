const userModel = require("../models/userModel")

const userPostData = async (req, res) => {
  let { fname, lname, age } = req.body

  const dataSaveInDb = userModel({ fname, lname, age })

  await dataSaveInDb.save()
}

module.exports = userPostData
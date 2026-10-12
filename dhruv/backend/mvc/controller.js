import { user } from "./model.js"

export const getApi = async (req, res) => {
  res.send(await user.find())
}

export const postApi = async (req, res) => {
  try {
    const { username, age } = req.body

    if (!username) throw "Username is requeued"
    if (!age) throw "Age is requerd"

    await user({ username, age }).save()

    res.send({
      msg: `Hello ${username}`
    })
  } catch (err) {
    res.status(300).send({
      msg: err
    })
  }
}

// http://localhost:8080/api/getMyApi

// 100 - 1, 2
// 200 -
// 300
// 400 - 404: not found
// 500
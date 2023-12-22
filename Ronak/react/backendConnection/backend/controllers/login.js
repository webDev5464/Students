const $authModel = require("../models/authModel")
const $bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    let { email, pass, username } = req.body
    console.log(req.body);

    try {
        const twoSideLoginUser = await $authModel.findOne({ email }) || await $authModel.findOne({ username })
        if (!twoSideLoginUser) throw "Enter email or username"
        if (!pass) throw "Password Required"

        const checkPass = await $bcrypt.compare(pass, twoSideLoginUser.pass)
        if (!checkPass) throw "Incorrect Password"

        if (twoSideLoginUser && checkPass) {
            const tokenExpire = 60
            const setToken = jwt.sign({ id: twoSideLoginUser._id, exp: Math.floor(Date.now() / 1000) + tokenExpire }, "defaultToken")

            res.cookie('token', setToken, { httpOnly: true }).send({
                process: true,
                msg: "Login successfully",
                twoSideLoginUser: await $authModel.findByIdAndUpdate(twoSideLoginUser._id, { setToken })
            })
        }
    } catch (err) {
        res.send({ process: false, msg: err })
    }
}

module.exports = login
const express = require("express")
const registerUser = require("../controllers/registerUser")
const login = require("../controllers/login")
const tokenVerification = require("../controllers/tokenVerification")

const authRouter = express.Router()

// require registerUser.js
authRouter.route("/register").post(registerUser)

// require login.js
authRouter.route("/login").post(login)

// token verification
authRouter.route("/token").get(tokenVerification)

module.exports = authRouter

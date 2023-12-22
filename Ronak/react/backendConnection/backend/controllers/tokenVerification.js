const jwt = require("jsonwebtoken")

const tokenVerification = async (req, res) => {
    let token = req.cookies.token

    try {
        let userToken = jwt.verify(token, 'defaultToken')

        if (userToken) {
            res.send({
                process: true,
                msg: "Valid User",
                id: userToken._id
            })
        } else throw "Invalid Token"
    } catch (err) {
        res.send({
            process: false, msg: err
        })
    }
}

module.exports = tokenVerification
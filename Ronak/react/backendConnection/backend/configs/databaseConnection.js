module.exports = async URL => await require("mongoose")
    .connect(URL)
    .then(console.log("Connected Database..."));
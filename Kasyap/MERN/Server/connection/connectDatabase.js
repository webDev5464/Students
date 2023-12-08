const mongoose = require("mongoose")

mongoose.connect("<LINK>").then(() => {
  console.log("Connected Database");
})
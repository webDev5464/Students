const mongoose = require('mongoose')

const DatabaseConnection = async (URI) => {
  try {
    await mongoose.connect(URI)
    console.log("Database is connected...");
  } catch (err) {
    console.log(`Database Connection Error :- ${err.message}`);
  }
}

module.exports = DatabaseConnection 
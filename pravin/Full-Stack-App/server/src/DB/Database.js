import mongoose from "mongoose";
import {DB_NAME} from "../constanst.js"

const Database = async (URI) => {
  try {
    const DB = await mongoose.connect(`${URI}/${DB_NAME}`);
    console.log(`📂  Database is Connected... At Host :${DB.connection.host}`);
    console.log(`📂  Database Name... At Folder : ${DB_NAME}`);
  } catch (error) {
    console.log("database Connection Error :", error);
    process.exit(1);
  }
};

export default Database;

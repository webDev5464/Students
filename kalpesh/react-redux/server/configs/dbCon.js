import { connect } from "mongoose";

export const dbCon = async (URL,dbName) => {
  try {
    await connect(URL);
    console.log(`==> ${dbName} database is connected`);
  } catch (err) {
    console.log({
      type: err.name,
      message: err.message,
    });
  }
};

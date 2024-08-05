import { connect } from "mongoose";

export const dbCon = async (URL) => {
  try {
    await connect(URL);
    console.log("==> Database Connected...");
  } catch (err) {
    console.log("err.message");
  }
};

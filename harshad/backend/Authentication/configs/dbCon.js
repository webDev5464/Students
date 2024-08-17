import { connect } from "mongoose";

export const dbCon = async (URI) => {
  try {
    await connect(URI);
    console.log("==> Database Connected");
  } catch (err) {
    console.log(err.message);
  }
};

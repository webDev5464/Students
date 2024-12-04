import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"
const LoginSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

LoginSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const encoded = await bcrypt.hash(this.password, 10);
    this.password = encoded;
    next();
  } catch (error) {
    console.log("password encoded error : ", error);
    next();
  }
});

const LoginModel = model("Login", LoginSchema);

export default LoginModel;

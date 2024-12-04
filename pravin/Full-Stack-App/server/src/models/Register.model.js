import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserRegisterSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserRegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const securepass = await bcrypt.hash(this.password, 10);
    this.password = securepass;
    next();
  } catch (error) {
    console.log("Password Encoded Error", error);
    next(error);
  }
});

const RegisterModel = model("Register", UserRegisterSchema);

export default RegisterModel;

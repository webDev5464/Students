import LoginModel from "../models/Login.Model.js";
import RegisterModel from "../models/Register.model.js";
import bcrypt from "bcrypt";
export const UserRegister = async (req, res) => {
  try {
    const { username, email, password, cfmpass } = req.body;

    if (!username || !email || !password || !cfmpass) {
      return res.status(400).send("All fields are required...");
    }

    if (password !== cfmpass) {
      throw new Error("Passwords do not match...");
    }

    const exist = await RegisterModel.findOne({
      $or: [{ username }, { email }],
    });

    if (exist) {
      return res
        .status(409)
        .send(`User Already Registered... ? ${exist.username}`);
    }

    const newuser = await RegisterModel.create({ username, email, password });
    console.log(newuser);

    return res
      .status(200)
      .send(`${newuser.username} User Registered Successfully... 🥳`);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
}; // User Register

export const UserLogin = async (req, res) => {
  try {
    const { userid, password } = req.body;

    if (!userid || !password) {
      return res.status(400).send("Please enter User ID and Password.");
    }

    const userreg = await RegisterModel.findOne({
      $or: [{ username: userid }, { email: userid }],
    });

    if (!userreg) {
      return res.status(400).send("User not found. Please register now.");
    }
    const correctpass = await bcrypt.compare(password, userreg.password);

    if (!correctpass) {
      return res.status(400).send("Password does not match.");
    }
     const loginuser = await LoginModel.create({ userid: userreg._id, password });
     console.log(loginuser);
     
    const user = await RegisterModel.findOne({$or: [{ username: userid }, { email: userid }]});
    return res.status(200).send(`${user.username} logged in successfully... 🥳`);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error. Please try again.");
  }
}; // Login User

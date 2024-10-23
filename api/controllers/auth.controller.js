import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  let { username, email, password } = req.body;
  password = bcryptjs.hashSync(password, 10);
  //   console.log(hashedPassword);
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json("User Created Succesfully");
  } catch (error) {
    res.status(500).json(error.message);
  }

  console.log(req.body);
};

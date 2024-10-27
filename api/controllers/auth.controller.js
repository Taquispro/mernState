import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  let { username, email, password } = req.body;
  password = bcryptjs.hashSync(password, 10);
  //   console.log(hashedPassword);
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json("User Created Succesfully");
  } catch (error) {
    next(error);
  }

  console.log(req.body);
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password"));
    const token = jwt.sign({ id: validUser._id }, "eqjdqdbfjkb121423726376");
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

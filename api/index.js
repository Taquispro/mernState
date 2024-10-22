import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("Server is running at port " + 3000);
});

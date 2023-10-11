import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connection established with Mongoose");
  })
  .catch((e) => {
    console.log(`Hacing a connection error ${e}`);
  });

const app = express();
const port = 6969;

app.listen(port, () => {
  console.log(`Serving on ${port}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.rout.js';
import authRouter from './routes/auth.route.js';


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
app.use(express.json());

app.listen(port, () => {
  console.log(`Serving on ${port}`);
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

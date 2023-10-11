import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
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
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://i.pinimg.com/474x/fb/ac/ba/fbacba63870e89ac60960f82ca21446e.jpg"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

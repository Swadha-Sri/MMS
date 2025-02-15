import mongoose from "mongoose";
import validator from "validator";

const adminRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  phno: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

export const Admin = mongoose.model('Admin Register', adminRegisterSchema);


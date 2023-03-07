const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({}, { collection: "Students" });

// mongoose.model("Students", userSchema);

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    branch: String,
    batch: String,
    password: String,
    confirmPassword: String,
    about: String,
  },
  {
    collection: "Students",
  }
);

mongoose.model("Students", userSchema);

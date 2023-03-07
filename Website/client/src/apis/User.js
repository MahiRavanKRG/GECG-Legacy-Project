const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({}, { collection: "Students" });

// mongoose.model("Students", userSchema);

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    branch: String,
    year: String,
    email: String,
    password: String,
    confirmpassword: String,
  },
  {
    collection: "Students",
  }
);

mongoose.model("Students", userSchema);
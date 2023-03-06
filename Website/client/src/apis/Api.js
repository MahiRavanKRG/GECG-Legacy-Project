const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

app.listen(5000, () => {
  console.log("Server Started");
});

mongoUrl =
  "mongodb+srv://admin:pass@cluster0.ls2tvf7.mongodb.net/GLP?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    // mongoose
    //   .connect("mongodb://127.0.0.1:27017/GLP", { useNewUrlParser: true })
    //   .then(() => {
    console.log("Connected to Database!!");
  })
  .catch((e) => {
    console.log(e);
  });

require("./User");
const User = mongoose.model("Students");
app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/createUser", async (req, res) => {
  const { fullname, branch, year, email, password, confirmpassword } = req.body;
  console.log(req.body);
  try {
    await User.create({
      fullname,
      branch,
      year,
      email,
      password,
      confirmpassword,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "NOT OK" });
  }
});

User.find({ email: "aashutoshverma007@gmail.com" })
  .select("password")
  .then((resp) => {
    console.log(resp);
  });

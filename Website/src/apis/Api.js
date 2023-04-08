const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const cors = require("cors");
const bcrypt = require("bcrypt");
const { json } = require("express");
app.use(cors());
app.listen(5000, () => {
  console.log("Server Started");
});

const mongoUrl =
  "mongodb+srv://admin:pass@cluster0.ls2tvf7.mongodb.net/GLP?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    // mongoose
    //   .connect("mongodb://127.0.0.1:27017/GLP", { useNewUrlParser: true })
    //   .then(() => {
    console.log("Connected to Database!");
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
  const { fullName, branch, batch, email, about, password, confirmPassword } =
    req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  console.log(req.body);
  try {
    await User.create({
      fullName,
      email,
      branch,
      batch,
      about,
      password: encryptedPassword,
      confirmPassword: encryptedPassword,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "NOT OK" });
  }
});

// app.post("/Userlogin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     console.log(email,password)
//     if (!user) {
//       return alert("User not found!");
//     }
//     if(await bcrypt.compare(password, user.password)){
//       console.log("password correct")
//       return res.json({status : "OK You are done!"})
//     }
//     console.log("password Incorrect")
//     return res.json({error : "Error avi"})
//   } catch {}
// });

// app.post("/Userlogin", async (req, res) => {
//   try {
//     const { loginEmailValue, loginPasswordValue } = req.body;
//     console.log(req.body);
//     const user = await User.findOne({ loginEmailValue });
//     console.log(User.findOne({loginEmailValue}))

//     console.log(user)
//     if (!user) {
//       return res.json({ error: "User Not found" });
//     }

//     if (await bcrypt.compare(loginPasswordValue, user.password)) {
//       // const token = jwt.sign({ email }, JWT_SECRET);
//       // if (res.status(201)) {
//       //   // return res.json({ status: "ok1" });
//       //   console.log();
//       //   return res.json({ status: "ok", data: token });
//       // } else {
//       //   return res.json({ error: "error" });
//       // }
//       return res.json({status : "OK!"});
//     }
//     res.json({ status: "error", error: "Invalid Password" });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post("/Userlogin", async (req, res) => {
  try {
    const { loginEmailValue, loginPasswordValue } = req.body;
    console.log(loginEmailValue, loginPasswordValue);
    const user = await User.findOne({ email: loginEmailValue });
    console.log(user);
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(loginPasswordValue, user.password)) {
      // const token = jwt.sign({ email }, JWT_SECRET);
      // if (res.status(201)) {
      //   // return res.json({ status: "ok1" });
      //   return res.json({ status: "ok", data: { User } });
      // } else {
      //   return res.json({ error: "error" });
      // }
      return res.json({
        status: "ok",
        username: user.username,
        email: user.email,
        password: user.password,
      });
    }
    res.json({ status: "error", error: "Invalid Password" });
  } catch (error) {
    console.log(error);
  }
});

require("./User");
const FilteredUser = mongoose.model("Students");
app.get("/getFilteredUser", async (req, res) => {
  // const branchValue = req.query.branchValue;
  const {branchValue} = req.query;

  try {
    const allUser = await FilteredUser.find({ branch: branchValue });
    // console.log(allUser)
    res.send({
      status: "ok",
      data: allUser,
    });
  } catch (error) {
    console.log(error);
  }
});

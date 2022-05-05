const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const { spawn } = require("child_process");

const cors = require("cors");
const fs = require("fs");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://nanya:ananya14@cluster0.tnvk5.mongodb.net/steg?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/encode", (req, res) => {
  //console.log("henlo");
  const python = spawn("python3", [
    "basic.py",
    req.body.text,
    "/Users/ananya/Documents/College/Projects/FYP/DIV2K_train_HR/" +
      req.body.pic,
  ]);
  console.log(req.body.text);
  console.log(req.body.pic);
  // in close event we are sure that stream from child process is closed
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.post("/createUser", async (req, res) => {
  //console.log("hi");
  let user = req.body;
  //let pic = req.body.pic;
  //let encpic = req.body.encpic;
  const plainData = fs.readFileSync(
    "/Users/ananya/Documents/College/Projects/FYP/DIV2K_train_HR/" + user.pic
  );
  //const plainData = fs.readFileSync(user.pic);
  const base64Data = new Buffer.from(plainData).toString("base64");
  user.pic = base64Data;
  //user.encpic = base64Data;
  const newUser = new UserModel(user);
  await newUser.save();
  // spawn new child process to call the python script
  res.json(user);
  console.log("Inserted into DB!");
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

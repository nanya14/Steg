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
  // let outputFilename = req.body.pic;
  // outputFilename = outputFilename.split(".")[0];
  const python = spawn("python3", [
    "basic.py",
    req.body.text,
    "/Users/ananya/Documents/College/Projects/FYP/DIV2K_train_HR/" +
      req.body.pic,
    // outputFilename,
  ]);
  console.log(req.body.text);
  console.log(req.body.pic);
});

// app.post("/decode", (req, res) => {
//   const python = spawn("python3", [
//     "basic.py",
//     "/Users/ananya/Documents/Intern/mern/client/public/images/" +
//       req.body.encpic,
//   ]);
//   console.log(req.body.encpic);
// });

app.post("/createUser", async (req, res) => {
  let user = req.body;
  const plainData = fs.readFileSync(
    "/Users/ananya/Documents/College/Projects/FYP/DIV2K_train_HR/" + user.pic
  );
  const base64Data = new Buffer.from(plainData).toString("base64");
  user.pic = base64Data;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
  console.log("Inserted into DB!");
});

app.post("/createUser2", async (req, res) => {
  let user = req.body;
  const plainData2 = fs.readFileSync(
    "/Users/ananya/Documents/Intern/mern/client/public/images/" + user.encpic
  );
  const base64Data2 = new Buffer.from(plainData2).toString("base64");
  user.encpic = base64Data2;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
  console.log("Inserted into DB!");
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

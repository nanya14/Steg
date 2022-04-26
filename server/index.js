const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

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

app.post("/createUser", async (req, res) => {
  let user = req.body;
  const plainData = fs.readFileSync(
    "/Users/ananya/Documents/College/Projects/FYP/DIV2K_train_HR/" + user.pic
  );
  //const plainData = fs.readFileSync(user.pic);
  const base64Data = new Buffer.from(plainData).toString("base64");
  user.pic = base64Data;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

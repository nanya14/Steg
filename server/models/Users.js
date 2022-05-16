const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  pic: {
    type: String,
    required: false,
  },
  encpic: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

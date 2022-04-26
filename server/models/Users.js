const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  psnr: {
    type: Number,
    required: false,
  },
  ssim: {
    type: Number,
    required: false,
  },
  loss: {
    type: Number,
    required: false,
  },
  accuracy: {
    type: Number,
    required: false,
  },
  payload: {
    type: Number,
    required: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

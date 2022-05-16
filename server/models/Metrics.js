const mongoose = require("mongoose");

const MetricSchema = new mongoose.Schema({
  psnr: {
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
  ssim: {
    type: Number,
    required: false,
  },
  payload: {
    type: Number,
    required: false,
  },
});

const MetricModel = mongoose.model("metrics", MetricSchema);
module.exports = MetricModel;

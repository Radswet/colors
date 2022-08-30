const { Schema, model } = require("mongoose");

const colorSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
});

module.exports = model("Color", colorSchema);
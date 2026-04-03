const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  date: Number,
  day: Number,
  today: Number,
  total: Number,
  sum: Number
}, { timestamps: true });

module.exports = mongoose.model("Entry", entrySchema);
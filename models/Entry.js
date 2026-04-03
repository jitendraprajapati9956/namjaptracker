<<<<<<< HEAD
const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  date: Number,
  day: Number,
  today: Number,
  total: Number,
  sum: Number
}, { timestamps: true });

=======
const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  date: Number,
  day: Number,
  today: Number,
  total: Number,
  sum: Number
}, { timestamps: true });

>>>>>>> 4d15e83 (Vercel-ready serverless Express setup)
module.exports = mongoose.model("Entry", entrySchema);
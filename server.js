const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const entryRoutes = require("./routes/entryRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB (FIXED)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/entry", entryRoutes);

// ✅ root route
app.get("/", (req, res) => {
  res.send("NamJap Tracker API is running 🚀");
});

// ❌ REMOVE THIS (IMPORTANT)
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

module.exports = app; // ✅ IMPORTANT

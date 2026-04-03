const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const entryRoutes = require("./routes/entryRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/entry", entryRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
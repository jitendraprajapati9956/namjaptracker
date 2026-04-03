const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const entryRoutes = require("./routes/entryRoutes");


// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/entry", entryRoutes);

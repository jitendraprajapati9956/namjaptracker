// api/index.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("✅ Namjap Tracker API is working!");
});

// Your existing routes
const entryRoutes = require("../routes/entryRoutes");
app.use("/api/entries", entryRoutes);
module.exports.handler = serverless(app);
module.exports = app;

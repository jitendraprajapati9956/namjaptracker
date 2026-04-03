// api/index.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("✅ Namjap Tracker API is working!");
});

module.exports.handler = serverless(app);

// api/index.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Your existing routes
const entryRoutes = require("../routes/entryRoutes");
app.use("/api/entries", entryRoutes);

module.exports = app;
module.exports.handler = serverless(app);
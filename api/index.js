const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Import your routes
const entryRoutes = require("../routes/entryRoutes");
app.use("/api/entries", entryRoutes);

// Export the app as a serverless function
module.exports = app;
module.exports.handler = serverless(app);
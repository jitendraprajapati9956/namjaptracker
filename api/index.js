const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

// routes import karo
const entryRoutes = require("../routes/entryRoutes");
app.use("/api/entries", entryRoutes);

// test route
app.get("/", (req, res) => {
  res.send("✅ Namjap Tracker API is working!");
});

// ✅ ONLY THIS EXPORT
module.exports = serverless(app);
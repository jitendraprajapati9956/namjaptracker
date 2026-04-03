const express = require('express');
const serverless = require('serverless-http'); // install via npm i serverless-http
const app = express();

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello from Vercel Express!');
});

// Export as serverless function
module.exports = serverless(app);

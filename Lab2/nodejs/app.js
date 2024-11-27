const express = require("express");
const app = express();

// Define a route that responds with 'Hello, World!'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Set the app to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export the app for testing

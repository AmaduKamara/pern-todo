const express = require("express");

// Init express app
const app = express();

app.listeners(5000, () => {
  console.log("Server running on port: 5000");
});

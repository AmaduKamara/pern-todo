const express = require("express");
const cors = require("cors");

// Init express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.listeners(5000, () => {
  console.log("Server running on port: 5000");
});

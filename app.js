const express = require("express");
const cors = require("cors");
const pool = require("./db");

// Init express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES($1) RETURNING *",
      [description]
    );
    res.status(201).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// GET all todos

// GET a todo

// Update a todo

// DELETE a todo

app.listen(5000, () => {
  console.log("Server running on port: 5000");
});

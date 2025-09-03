import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn React", done: false },
  { id: 2, task: "Build To-Do App", done: false },
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD new todo
app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  const newTodo = { id: Date.now(), task, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// let todos = [
//   { id: 1, task: "Learn React", done: false },
//   { id: 2, task: "Build To-Do App", done: false },
// ];

// // GET all todos
// app.get("/todos", (req, res) => {
//   res.json(todos);
// });

// // ADD new todo
// app.post("/todos", (req, res) => {
//   const { task } = req.body;
//   if (!task) return res.status(400).json({ error: "Task is required" });

//   const newTodo = { id: Date.now(), task, done: false };
//   todos.push(newTodo);
//   res.json(newTodo);
// });

// // DELETE todo
// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   todos = todos.filter((todo) => todo.id !== parseInt(id));
//   res.json({ message: "Todo deleted" });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Note from "./models/Note.js";   // ye file banani hai

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/notesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error(err));

// Routes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and Content required" });
  }
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

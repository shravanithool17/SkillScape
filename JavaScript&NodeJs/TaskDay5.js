//MINI TASK DAY-5

const express = require("express");

const app = express();
const port = 3000;

// Sample student list (you can later fetch from DB)
const students = [
  { id: 1, name: "Shravani", age: 18, course: "Computer Engineering" },
  { id: 2, name: "Krishna", age: 18, course: "IT Engineering" },
  { id: 3, name: "Sanskriti", age: 18, course: "Electronics" }
];


app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Express + body-parser!");
});

// Temporary in-memory database
let students = [
  { id: 1, name: "Shravani", age: 19, course: "CSE" },
  { id: 2, name: "Krishna", age: 20, course: "IT" }
];

// ✅ GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// ✅ GET student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("❌ Student not found");
  res.json(student);
});

// ✅ POST new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ✅ PUT update student
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("❌ Student not found");

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.course = req.body.course || student.course;

  res.json(student);
});

// ✅ DELETE student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("❌ Student not found");

  const deleted = students.splice(index, 1);
  res.json(deleted);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// ASSIGNMENT 4 : API RETURNING "HELLO, WORLD!"

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});
const express = require("express");
const app = express();
const port = 3000;

let userInputs = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/greet", (req, res) => {
  const name = req.query.name;
  userInputs.push(name);
  res.send(`<h1>Hello, ${name}</h1>`);
});

app.get("/search", (req, res) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = parseInt(req.query.target);
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && arr[j] === target) {
        found = true;
      }
    }
  }
  res.send(found ? "Found" : "Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

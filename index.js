const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  // Vulnerability: unsanitized user input reflected
  const name = req.query.name;
  res.send(`Hello ${name}`)
  // Memory leak: global array grows unbounded
  if (!global.leak) global.leak = [];
  global.leak.push(new Array(1000000).fill("leak"));
  // Inappropriate DSA: O(n^2) search in a large array
  let arr = Array.from({length: 10000}, (_, i) => i);
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        found = true;
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


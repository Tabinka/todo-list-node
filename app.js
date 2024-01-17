const express = require('express');
const app = express();
const port = 3000;

var tasks = ["Task #1", "Task #2", "Task #3"];

app.get('/', (req, res) => {
  tasks.forEach(function(item){
    console.log(item);
  });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Todo List App listening at http://localhost:${port}`);
});

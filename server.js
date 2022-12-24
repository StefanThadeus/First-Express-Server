const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send('Hello');
});

app.get("/contact", function(req, res) {
  res.send('Contact me at: stefan@gmail.com');
});

app.get("/about", function(req, res) {
  res.send('My name is Stefan, a software engineer.');
});

app.get("/hobbies", function(req, res) {
  res.send('<h1>There are just too many to count!</h1>');
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

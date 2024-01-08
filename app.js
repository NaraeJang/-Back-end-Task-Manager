require("./db/connect");

const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

// MIDDLEWARE
app.use(express.json()); // if we don't use this, we don't have date on the body.

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

app.use("/api/v1/tasks", tasks);

// LOCALHOST PORT SETTING
const port = 3000;

app.listen(3000, () => {
  console.log(`Server is listening on port ${port}...`);
});

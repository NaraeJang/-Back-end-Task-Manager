const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

// MIDDLEWARE
app.use(express.json()); // if we don't use this, we don't have date on the body.
app.use(express.static("./public"));

// ROUTE
app.use("/api/v1/tasks", tasks);
app.use(notFound);
// error handler
app.use(errorHandler);

// LOCALHOST PORT SETTING
const port = process.env.PORT || 3000;

// This function helps when we connect DB first and then we spin up the server.
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    }); //so it will wait the get the DB, and it will spin the server.
  } catch (error) {
    console.log(error);
  }
};

start();

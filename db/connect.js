const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://narae:narae1234@cluster0.66ch5yj.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}; //it returns to promise. so we can use async.

module.exports = connectDB;

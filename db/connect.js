const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://narae:narae1234@cluster0.66ch5yj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(`CONNECTED TO THE DB...`))
  .catch((err) => {
    console.log(err);
  });

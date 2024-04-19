const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGOURL, {
    // useNewUrlParser: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error occurred in Database", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("db disconnected");
  });
};

module.exports = connectDatabase;

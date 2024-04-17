const mongoose = require("mongoose");


const connectDatabase = () => {
  const MONGOURL = "mongodb://localhost:27017";

  mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    
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

module.exports =  connectDatabase;
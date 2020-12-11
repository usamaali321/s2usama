const mongoose = require("mongoose");

const URI =
  "mongodb+srv://usama:000@cluster0.teqzo.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;

require('dotenv').config();

// "mongodb://localhost:27017/WorkOnCall"
const mongoose = require("mongoose");

const DbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongoDb connected successfully");
    })
    .catch((error) => {
      console.error("Error in coonecting", error);
    });
};

module.exports = DbConnection;

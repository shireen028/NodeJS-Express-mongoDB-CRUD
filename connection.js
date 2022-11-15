const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dmj9xy4.mongodb.net/?retryWrites=true&w=majority`;

const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Database is connected: " + uri);
  })
  .catch((err) => {
    console.log("Database not connected " + err);
  });

module.exports = connexion;

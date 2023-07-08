const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://rajpadval145:rajpadval145@cluster0.baoe12s.mongodb.net/contact_form?retryWrites=true&w=majority";

const connection = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to DB⚡");
    })
    .catch((error) => {
      console.log(error);
    });
};

connection();
module.exports = connection;

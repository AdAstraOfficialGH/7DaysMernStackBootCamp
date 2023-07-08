const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const form = mongoose.model("form reponse", FormSchema);
module.exports = form;

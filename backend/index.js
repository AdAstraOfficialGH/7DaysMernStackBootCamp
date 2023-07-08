// files require
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require("./connection");
const FormData = require("./models/FormData");

// Request ke types

// GET - server se data get karne ke liye
// POST - server pe data post karne ke liye
// PUT - server ka data modify karne ke liye
// DELTE - server ka data delte karne ke liye

// Middlewares
app.use(cors());
app.use(express.json());

// routes

// route to get data from the database
app.get("/api/get-data", async (req, res) => {
  const data = await FormData.find();
  if (!data) {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(200).json(data);
  }
});

// route to post data into database
app.post("/api/post-data", async (req, res) => {
  // getting the data from the request
  const { name, email, phone, message } = req.body;

  // creating form
  let form = await FormData.create({ name, email, phone, message });

  // directly karna hoga to
  // let form = await FormData.create({
  //   name: name,
  //   email: email,
  //   phone: phone,
  //   message: message,
  // });

  // if you don't want to destructure
  // let form = await FormData.create({
  //   name: req.body.name,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   message: req.body.message,
  // });

  // saving the form
  let submittedForm = await form.save();

  // response to user
  res.status(200).json(submittedForm);
});

// listem

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

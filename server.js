const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./models/Users");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/cimriDb");

const laptopSchema = new mongoose.Schema({
  lId: Number,
  name: String,
});
const Laptop = mongoose.model("Laptop", laptopSchema);

app.get("/laptops/fiyat5000", function getAllMovies(request, response) {
  Laptop.find(function (err, allLaptops) {
    if (!err) {
      response.send(allLaptops);
    } else {
      console.log(err);
    }
  });
});

app.post("/signup", (req, res, next) => {
  const newUser = new User({
    eposta: req.body.eposta,
    parola: bcrypt.hashSync(req.body.parola, 10),
  });
  console.log(newUser);
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server running on port" + port);
});

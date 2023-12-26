const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    status: String,
  },
  status: {
    type: String,
    status: String,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;

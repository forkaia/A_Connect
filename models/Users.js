const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  username: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  registerDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Users", Users);

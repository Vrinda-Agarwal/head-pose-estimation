const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User_Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: [true, "*User already exists"],
  }
});
module.exports = User_Type = mongoose.model("User_Type", User_Schema);
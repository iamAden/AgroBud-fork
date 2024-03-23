const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  referral: { type: String },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;

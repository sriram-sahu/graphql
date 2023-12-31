const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  cratedAt: String,
});

module.exports = model("User", userSchema);

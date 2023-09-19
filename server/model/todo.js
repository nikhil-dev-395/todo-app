const mongoose = require("mongoose");
let todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("todo", todoSchema);

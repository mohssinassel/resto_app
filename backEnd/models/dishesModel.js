const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image_url: {
    type: String,
    required: true,
    default : ""
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Float64Array,
    required: true
  },

});

module.exports = mongoose.model("Dishes", dishesSchema);
const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
  dishename: {
    type: String,
    required: true,
    unique: true,
  },
  picture_of_plat: {
    type: String,
    required: true,
    default : ""
  },
  price: {
    type: Float64Array,
    required: true
  }
});

module.exports = mongoose.model("Dishes", dishesSchema);
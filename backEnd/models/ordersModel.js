const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date_of_reservation: {
    type: Date,
    required: true,
  },
  
  table :{
    type: String,
    required: true,
  },
  dishes :{
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model("Orders", ordersSchema);
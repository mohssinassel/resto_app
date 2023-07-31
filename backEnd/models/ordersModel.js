const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date_of_reservation: {
    type: Date,
    required: true,
  },
  waiter :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chef:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cashier:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

});

module.exports = mongoose.model("Orders", ordersSchema);
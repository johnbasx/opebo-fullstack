const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema(
  {
    subService: { type: ObjectId, ref: "SubService" },
    name: String,
    price: String,
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

const orderSchema = new mongoose.Schema(
  {
    subServices: [bookingSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: "Not processed",
      enum: [
        "Not processed",
        "Processing",
        "On the way",
        "Reached",
        "Cancelled",
      ], // enum means string objects
    },
    updated: Date,
    user: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, Booking };

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const subServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    service: {
      type: ObjectId,
      ref: "Service",
      required: true,
    },
    status: {
      type: String,
      default: "Available",
      enum: ["Available", "Not Available", "Under Review"], // enum means string objects
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubService", subServiceSchema);

const Vendor = require("../models/vendor");
const { Order } = require("../models/order");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.vendorById = (req, res, next, id) => {
  Vendor.findById(id).exec((err, vendor) => {
    if (err | vendor) {
      return res.status(400).json({
        error: "Opps Sign in required to proceed",
      });
    }
    req.profile = vendor;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => {
  Vendor.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, vendor) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action",
        });
      }
      vendor.hashed_password = undefined;
      vendor.salt = undefined;
      res.json(vendor);
    }
  );
};

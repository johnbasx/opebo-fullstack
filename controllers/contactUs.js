const formidable = require("formidable");
const ContactUs = require("../models/contactUs");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    // check for all fields
    const { name, phone, email, message } = fields;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let contactUs = new ContactUs(fields);

    contactUs.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

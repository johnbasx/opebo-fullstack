const formidable = require("formidable");
const SubscribeUS = require("../models/subscribeUs");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    // check for all fields
    const { email } = fields;

    if (!email) {
      return res.status(400).json({
        error: "Email is required!",
      });
    }

    let subscribeUs = new SubscribeUS(fields);

    subscribeUs.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

const express = require("express");
const router = express.Router();

const { create } = require("../controllers/contactUs");
const { contactUsValidator } = require("../validation");

router.post("/contactUs", contactUsValidator, create);

module.exports = router;

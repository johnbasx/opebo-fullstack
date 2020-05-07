const express = require("express");
const router = express.Router();

const { create } = require("../controllers/subscribeUS");
const { subscribeUsValidation } = require("../validation");

router.post("/subscribeUs", subscribeUsValidation, create);

module.exports = router;

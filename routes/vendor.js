const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { vendorById, read, update } = require("../controllers/vendor");

router.get("/secret/:vendorId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    vendor: req.profile,
  });
});

router.get("/vendor/:vendorId", requireSignin, isAuth, read);
router.put("/vendor/:vendorId", requireSignin, isAuth, update);

router.param("venodrId", vendorById);

module.exports = router;

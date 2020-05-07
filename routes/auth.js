const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  vendorSignup,
  vendorSignIn,
  requireSignin,
} = require("../controllers/auth");
const { SignupValidator } = require("../validation");

router.post("/signup", SignupValidator, signup);
router.post("/vendorSignup", SignupValidator, vendorSignup);
router.post("/signin", signin);
router.post("/vendorSignIn", vendorSignIn);
router.get("/signout", signout);

module.exports = router;

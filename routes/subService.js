const express = require("express");
const router = express.Router();

const {
  create,
  subServiceById,
  read,
  remove,
  update,
  list,
  listRelated,
  listServices,
  photo,
  listSearch,
} = require("../controllers/subService");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/subService/:subServiceId", read);
router.post(
  "/subService/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  create
);
router.delete(
  "/subService/:subServiceId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/subService/:subServiceId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/subServices", list);
router.get("/subServices/search", listSearch);
router.get("/subServices/related/:productId", listRelated);
router.get("/subServices/services", listServices);

router.get("/subService/photo/:productId", photo);

router.param("userId", userById);
router.param("subServiceId", subServiceById);

module.exports = router;

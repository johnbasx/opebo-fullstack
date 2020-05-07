const express = require("express");
const router = express.Router();

const {
  create,
  serviceById,
  read,
  update,
  remove,
  list,
  listRelated,
  listCategories,
  listSearch,
} = require("../controllers/service");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/service/:serviceId", read);
router.post("/service/create/:userId", requireSignin, isAuth, isAdmin, create);

router.delete(
  "/service/:serviceId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.put(
  "/service/:serviceId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/services", list);
router.get("/services/search", listSearch);
router.get("/services/related/:productId", listRelated);
router.get("/services/categories", listCategories);

router.param("userId", userById);
router.param("serviceId", serviceById);

module.exports = router;

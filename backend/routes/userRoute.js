const express = require("express");
const {
  registerUser,
  authUser,
  allUser,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.route("/").post(registerUser).get(protect, allUser);
router.route("/login").post(authUser);

module.exports = router;

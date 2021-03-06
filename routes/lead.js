const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const leadController = require("../controllers/lead");
const { authenticatateJWT } = require("../middleware/authenticator");
const { check, validationResult } = require("express-validator");

router.post("/" ,leadController.create);
router.get("/" ,leadController.readAll);

module.exports = router;

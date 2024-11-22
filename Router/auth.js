
const express = require ("express");
const router = express.Router();

const signupHandler = require("../controller/signupController");
const loginHandler = require("../controller/loginController");

router.route('/signup')
.post(signupHandler)

router.route('/login')
.post(loginHandler);

module.exports = router
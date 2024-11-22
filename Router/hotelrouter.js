
const express = require ("express");
const allHotelHandler = require("../controller/hotelController");
const router = express.Router();

router.route('/')
.get(allHotelHandler)

module.exports = router;

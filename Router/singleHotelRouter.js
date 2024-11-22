
const express = require("express");
const singleHotelHandler = require("../controller/singleHotelController");
const router = express.Router();

router.route('/:id')
.get(singleHotelHandler)

module.exports = router
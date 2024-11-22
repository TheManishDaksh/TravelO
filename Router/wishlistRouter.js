
const express = require("express")
const router = express.Router();

const verifyUser = require("../middleware/verifyUser");
const { createWishList, deleteWishList, findWishlist } = require("../controller/wishlistcontroller");

router.route('/').post(verifyUser, createWishList)

router.route('/:id').delete( verifyUser, deleteWishList)

router.route('/').get(verifyUser, findWishlist)

module.exports = router;    
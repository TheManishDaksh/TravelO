import express from "express"
const router = express.Router();

import verifyUser from "../middleware/verifyUser.js"
import {createWishList, deleteWishList, findWishlist} from "../controller/wishlistcontroller.js"

router.route('/').post(verifyUser, createWishList)

router.route('/:id').delete( verifyUser, deleteWishList)

router.route('/').get(verifyUser, findWishlist)

export default router
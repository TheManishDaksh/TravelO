import express from "express"
import singleHotelHandler from "../controller/singleHotelController.js"
const router = express.Router();

router.route('/:id')
.get(singleHotelHandler)

export default router
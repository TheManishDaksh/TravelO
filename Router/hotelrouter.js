import express from "express"
import allHotelHandler from "../controller/hotelController.js"
const router = express.Router();

router.route('/')
.get(allHotelHandler)

export default router

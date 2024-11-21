
const express = require("express");
const router = express.Router();

const hotels = require("../model/hotelModel");

router.route('/:id')
.get(async (req,res)=>{
    try{
        const {id} = req.params;
        const singleHotel = await hotels.findById(id);
    res.json(singleHotel);
    }catch(err){
        console.log(err);
    }
})

module.exports = router
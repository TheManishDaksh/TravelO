
const express = require('express');
const router = express.Router();

const Hotels = require("../data/hotels");
const modelHotel = require("../model/hotelModel");

router.route('/')
.post( async (req,res) =>{
        try{
            await modelHotel.remove();
        const importData = await modelHotel.insertMany(Hotels.data);
        res.json(importData)
    }catch(err){
        console.log(err);
        res.json({ message: "Could not add data to DB"})
    }
}
)

module.exports = router
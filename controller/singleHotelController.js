
const hotels = require("../model/hotelModel");

const singleHotelHandler = async (req,res)=>{
    try{
        const {id} = req.params;
        const singleHotel = await hotels.findById(id);
    res.json(singleHotel);
    }catch(err){
        console.log(err);
    }
}

module.exports = singleHotelHandler;
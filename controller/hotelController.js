const hotel = require("../model/hotelModel");

const allHotelHandler = async (req,res)=>{
    const hotelCategory = req.query.category;
    try{
        let hotels;
        if(hotelCategory){
            hotels = await hotel.find({category : hotelCategory})
        }else{
            hotels = await hotel.find({});
        }
         
        hotels? res.json(hotels) : res.status(404).json({message : "data not found"})
    }catch(err){
        console.log(err);   
    }
}

module.exports = allHotelHandler;
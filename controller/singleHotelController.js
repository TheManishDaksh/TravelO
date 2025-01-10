import Hotel from "../model/hotelModel.js"

 const singleHotelHandler = async (req,res)=>{
    try{
        const {id} = req.params;
        const singleHotel = await Hotel.findById(id);
    res.json(singleHotel);
    }catch(err){
        console.log(err);
    }
}

export default singleHotelHandler
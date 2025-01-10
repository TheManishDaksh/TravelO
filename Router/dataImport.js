import express from "express"
const router = express.Router();

import hotels from "../data/hotels.js"
import Hotel from "../model/hotelModel.js"

router.route('/')
.post( async (req,res) =>{
        try{
            await Hotel.remove();
        const importData = await Hotel.insertMany(hotels.data);
        res.json(importData)
    }catch(err){
        console.log(err);
        res.json({ message: "Could not add data to DB"})
    }
}
)

export default router
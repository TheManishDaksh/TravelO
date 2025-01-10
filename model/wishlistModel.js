import mongoose from "mongoose"

const wishlistShema = new mongoose.Schema({
    hotelId : {type : String, require: true}
})

 const Wishlist = mongoose.model("wishlist",wishlistShema);

 export default Wishlist
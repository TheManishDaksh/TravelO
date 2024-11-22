
const mongoose = require("mongoose");

const wishlistShema = new mongoose.Schema({
    hotelId : {type : String, require: true}
})

const Wishlist = mongoose.model("wishlist",wishlistShema);

module.exports = Wishlist;
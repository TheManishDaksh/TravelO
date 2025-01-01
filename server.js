
const express = require ("express");
const app = express();
const mongoose = require("mongoose")

const hotelrouter = require("../TravelO/Router/hotelrouter")
const connectDB = require("../TravelO/config/dbconfig")
const importHotelData = require("../TravelO/Router/dataImport")
const importCategoryData = require("../TravelO/Router/categoryImport")
const importCategory = require("../TravelO/Router/categoryRouter")
const singleHotel = require("../TravelO/Router/singleHotelRouter")
const userAuth = require("../TravelO/Router/auth")
const wishlist = require("../TravelO/Router/wishlistRouter")

app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send("hello everyone");
})
app.use('/api/hotels' , hotelrouter);
app.use('/api/hotelData', importHotelData);
app.use('/api/categoryData', importCategoryData);
app.use('/api/category', importCategory);    
app.use('/api/hotels', singleHotel);
app.use('/api/auth', userAuth);
app.use('/api/wishlist', wishlist);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});

app.listen(3000);


const express = require ("express");
const app = express();
const hotelrouter = require("../TravelO/Router/hotelrouter")
const mongoose = require("mongoose")
const connectDB = require("../TravelO/config/dbconfig")
const importHotelData = require("../TravelO/Router/dataImport")
const importCategoryData = require("../TravelO/Router/categoryImport")
const importCategory = require("../TravelO/Router/categoryRouter")
const singleHotel = require("../TravelO/Router/singleHotelRouter")

app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send("hello everyone");
})
app.use('/hotels' , hotelrouter);
app.use('/hotelData', importHotelData);
app.use('/categoryData', importCategoryData);
app.use('/category',importCategory);    
app.use('/hotels', singleHotel);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});
mongoose.connection.on("error", (err) => {
    console.error("Database connection error:", err);
});

app.listen(3000);

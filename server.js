
const express = require ("express");
const app = express();
const hotelrouter = require("../TravelO/Router/hotelrouter")
const mongoose = require("mongoose")
const connectDB = require("../TravelO/config/dbconfig")
const importHotelData = require("../TravelO/Router/dataImport")

app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send("hello everyone");
})
app.use('/hotels' , hotelrouter);
app.use('/hotelData', importHotelData);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});
mongoose.connection.on("error", (err) => {
    console.error("Database connection error:", err);
});

app.listen(3000);

import express from "express"
const app = express();
import mongoose from "mongoose";
import cors from "cors"

import hotelrouter from "./Router/hotelrouter.js"
import connectDB from "./config/dbconfig.js"
import dataImport from "./Router/dataImport.js"
import categoryImport from "./Router/categoryImport.js"
import categoryRouter from "./Router/categoryRouter.js"
import singleHotelRouter from "./Router/singleHotelRouter.js"
import auth from "./Router/auth.js"
import wishlistRouter from "./Router/wishlistRouter.js"

app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send("hello everyone");
})
app.use('/api/hotels' , hotelrouter);
app.use('/api/hotelData', dataImport);
app.use('/api/categoryData', categoryImport);
app.use('/api/category', categoryRouter);    
app.use('/api/hotels', singleHotelRouter);
app.use('/api/auth', auth);
app.use('/api/wishlist', wishlistRouter);

mongoose.connection.on("open", () => {
    console.log("Connected to DB");
});

app.listen(3000);

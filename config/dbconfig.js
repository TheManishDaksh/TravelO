
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

 const connectDB = async ()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected");
    
    }catch(err){
        console.log(`error is ${err}`)
    }
}
export default connectDB
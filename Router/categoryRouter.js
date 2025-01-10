import express from "express"
const router = express.Router();
import categoryModel from "../model/categoryModel.js"

router.route('/')
.get(async(req,res)=>{
    try{
        const categoriesInDB = await categoryModel.find({});
        res.json(categoriesInDB);
    }catch(err){
        console.log(err);
    }
})

export default router
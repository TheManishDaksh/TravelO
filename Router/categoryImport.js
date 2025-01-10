import express from "express"
const router = express.Router();

import categories from "../data/category.js"
import categoryModel from "../model/categoryModel.js"

router.route('/')
.post( async (req,res) =>{
        try{
        const categoryInDB = await categoryModel.insertMany(categories.data);
        res.json(categoryInDB)
    }catch(err){
        console.log(err);
        res.json({ message: "Could not add categorydata to DB"})
    }
}
)

export default router
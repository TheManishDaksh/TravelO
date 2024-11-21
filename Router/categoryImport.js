

const express = require('express');
const router = express.Router();

const category = require("../data/category");
const modelCategory = require("../model/categoryModel");

router.route('/')
.post( async (req,res) =>{
        try{
        const categoryInDB = await modelCategory.insertMany(category.data);
        res.json(categoryInDB)
    }catch(err){
        console.log(err);
        res.json({ message: "Could not add categorydata to DB"})
    }
}
)

module.exports = router
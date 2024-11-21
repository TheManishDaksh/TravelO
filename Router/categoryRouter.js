
const express = require('express');
const router = express.Router();

const category = require("../model/categoryModel");

router.route('/')
.get(async(req,res)=>{
    try{
        const categoriesInDB = await category.find({});
        res.json(categoriesInDB);
    }catch(err){
        console.log(err);
    }
})

module.exports = router
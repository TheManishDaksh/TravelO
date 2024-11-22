
const express = require("express")
const router = express.Router();
const wishlist = require("../model/wishlistModel")

router.route('/').post(async(req,res)=>{
    const newWishlist = new wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        console.log(err);
        res.status(500  ).json({message : "failed to create wishlist"})
    }
})

router.route('/:id').delete(async(req,res)=>{
    try{
       await wishlist.findByIdAndDelete(req.params.id)
        res.json({message : "wishlist deleted"})
    }catch(err){
        console.log(err);
        res.status(500).json({message : "can not delete the wishlist"})
    }
})

router.route('/').get(async(req,res)=>{
    try{
        const findWishlist = await wishlist.find({})
        res.json(findWishlist);
    }catch(err){
        console.log(err);
        res.status(500).json({message : "can't find wishlist"})
    }
})

module.exports = router
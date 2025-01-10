import Wishlist from "../model/wishlistModel.js"

const createWishList = async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        console.log(err);
        res.status(500  ).json({message : "failed to create wishlist"})
    }
}

const deleteWishList = async(req,res)=>{
    try{
       await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message : "wishlist deleted"})
    }catch(err){
        console.log(err);
        res.status(500).json({message : "can not delete the wishlist"})
    }
}

const findWishlist = async(req,res)=>{
    try{
        const findWishlist = await Wishlist.find({})
        res.json(findWishlist);
    }catch(err){
        console.log(err);
        res.status(500).json({message : "can't find wishlist"})
    }
}
export {createWishList, deleteWishList, findWishlist}
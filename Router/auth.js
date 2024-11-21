
const express = require ("express");
const User = require("../model/userModel");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.route('/register')
.post(async (req,res)=>{
    try{
        const newUser = new User(
            {username : req.body.username,
                email : req.body.email,
                mobileNumber : req.body.mobileNumber,
                password : req.body.password}
        )
        const savedUser = await newUser.save();
        res.status(202).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(404).json({message : "cannot create a user account"})
    }
})

router.route('/login').post(async (req, res) => {
    try {
        const user = await User.findOne({ mobileNumber: req.body.mobileNumber });
        if (!user) {
            return res.status(401).json({ message: "Wrong number!" });
        }
        if (user.password !== req.body.password) {
            return res.status(401).json({ message: "Wrong password!" });
        }
        const { password, ...rest } = user._doc; 
        const token = jwt.sign(
            { username: user.username },
            process.env.JWT_Secret );

        res.json({ ...rest, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred!" });
    }
});

module.exports = router
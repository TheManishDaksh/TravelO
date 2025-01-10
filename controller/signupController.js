import User from "../model/userModel.js"

const signupHandler = (async (req,res)=>{
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

export default signupHandler
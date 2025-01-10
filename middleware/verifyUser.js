import jwt from "jsonwebtoken"

const verifyUser = async(req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.JWT_Secret,(err,user)=>{
            if(err) return res.status(500).json({message : "invalid token"});
            res.user = user;
            next();
        })
    }
}

export default verifyUser
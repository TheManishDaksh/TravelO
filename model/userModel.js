import mongoose from  "mongoose"

const userSchema = new mongoose.Schema({
    username : {type : String, require : true},
    email : {type : String, require : true},
    mobileNumber : {type : Number, require : true},
    password : {type : String, require : true},
})

 const User = mongoose.model("user", userSchema);

 export default User
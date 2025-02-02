import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginHandler = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {

        if (!mobileNumber || !password) {
            return res.status(400).json({ 
                message: "Mobile number and password are required" 
            });
        }

        const user = await User.findOne({ mobileNumber });
        
        if (!user) {
            return res.status(401).json({ 
                message: "Invalid mobile number or password" 
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ 
                message: "Invalid mobile number or password" 
            });
        }

        const token = jwt.sign(
            { 
                userId: user._id,
                username: user.username,
                mobileNumber: user.mobileNumber 
            },
            process.env.JWT_Secret,
            { expiresIn: '24h' }
        );

        const { password: _, ...userWithoutPassword } = user._doc;

        res.status(200).json({
            message: "Login successful",
            user: userWithoutPassword,
            token
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ 
            message: "An error occurred during login",
            error: err.message 
        });
    }
};

export default loginHandler;
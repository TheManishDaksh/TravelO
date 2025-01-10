import User from "../model/userModel.js";
import bcrypt from "bcrypt";

const signupHandler = async (req, res) => {
    const saltRounds = 10;
    const { username, email, mobileNumber, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [
                { email },
                { mobileNumber }
            ]
        });

        if (existingUser) {
            return res.status(409).json({ 
                message: "User already exists with this email or mobile number" 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            email,
            mobileNumber,
            password: hashedPassword
        });
       
        const savedUser = await newUser.save();
        
        // Don't send password back in response
        const { password: _, ...userWithoutPassword } = savedUser._doc;
        
        res.status(201).json({
            message: "User created successfully",
            user: userWithoutPassword
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({
            message: "Error creating user account",
            error: err.message
        });
    }
};

export default signupHandler;
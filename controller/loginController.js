import User from "../model/userModel.js"
import jwt from "jsonwebtoken"


const loginHandler = (async (req, res) => {
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

export default loginHandler
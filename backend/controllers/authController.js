import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "Please login" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        user = new User({
            username,
            email,
            password: hashPassword,
        });

        await user.save();
        return res
            .status(201)
            .json({ success: true, message: "Signup Successful" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user;
        user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Please singup" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1hr',
        });
        res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60), //1 hr
        })

        res.status(200).json({
            success: true, message: 'Login Successful'
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


export const logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            expires: new Date(Date.now())
        })
        return res.status(200).json({ success: true, message: 'Logouy Successful' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const checkUser= async (req,res)=>{
const id=req.id;
try {
    const user = await User.findById(id).select('-password');
    if(!user){
        return res.status(400).json({ success: false, message:'Please Signup' });
    }
    return res.status(200).json({ success: true, user });

} catch (error) {
     return res.status(500).json({ success: false, message: error.message });
 
}
}


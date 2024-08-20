import User from '../models/User.js'
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "Please sign up" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        user = new User({
            username,
            email,
            password: hashPassword,
        });

        await user.save();
        return res.status(201).json({ success: true, message: 'Signup Successful' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

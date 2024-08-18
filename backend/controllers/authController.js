import User from "../models/User";

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user;
        user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "Please singup" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            username,
            email,
            password: hashPassword,
        });
        await user.save();
        return res.status(200).json({ success: true, message: 'Signup Successful' });
    } catch (error) {
        return res.status(500).json({ success: true, message: error.message });

    }
};

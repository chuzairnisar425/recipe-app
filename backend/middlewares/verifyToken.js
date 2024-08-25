import jwt from 'jsonwebtoken';
export const verifyToken = (req, res, next) => {
    const token = req.cookies.token
console.log(token)
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.staus(400).json({ success: false, message: 'Token Verification Failed' })
            }
            req.id = decoded.id
        })
        next();
    } catch (error) {
        return res.staus(400).json({ success: false, message: error.message })
    }
}


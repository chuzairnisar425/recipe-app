import express from 'express';
import { signup,login, logout, checkUser } from './controllers/authController.js';
import { verifyToken } from './middlewares/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout',logout)
router.get('/checkuser',verifyToken, checkUser)
export default router;

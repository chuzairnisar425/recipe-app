import express from "express";
import {
  signup,
  login,
  logout,
  checkUser,
} from "./controllers/authController.js";
import { verifyToken } from "./middlewares/verifyToken.js";
import {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
} from "./controllers/featureController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkuser", verifyToken, checkUser);
router.post("/addToFavourites/:id", addToFavourites);
router.post("/removeFromFavourites/:id", removeFromFavourites);
router.get("/getFavourites/:id", getFavourites);
export default router;

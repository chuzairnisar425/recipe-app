import { User } from "../models/User.js";

export const addToFavourites = async (req, res) => {
    const { id } = req.params;
    const favourite = req.body;
    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const existingFavourite = user.favourites.some(
            (fav) => fav.idMeal === favourite.idMeal
        );
        if (existingFavourite) {
            return res.status(400).json({
                success: false,
                message: "Recipe already in favourites",
            });
        } else {
            user.favourites = [...user.favourites, favourite];
            await user.save();
            return res.status(200).json({ success: true, message: 'Added to favourites' });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const removeToFavourites = async (req, res) => {
    const id = req.params
    const favourite = req.body
}
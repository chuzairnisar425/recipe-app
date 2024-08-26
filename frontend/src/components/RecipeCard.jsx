import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { HiHeart } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setFavourites } from "../../slices/authSlice";
import { getFavourites } from "../../helper";
import { Link } from "react-router-dom";
function RecipeCard({ id, title, image }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const addToFav = async (favourite) => {
    const res = await axios.post(
      `http://localhost:5000/api/addToFavourites/${user._id}`,
      favourite,
      { withCredentials: true }
    );
    const data = res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };

  const removeFromFav = async (favourite) => {
    const res = await axios.post(
      `http://localhost:5000/api/removeFromFavourites/${user._id}`,
      favourite,
      { withCredentials: true }
    );
    const data = res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };
  return (
    <div className="shadow-md flex justify-between flex-col gap-3 p-3 rounded-lg bg-white ">
      <div className="overflow-hidden">
        <Link to={`recipe/${id}`}>
          <img
            src={image}
            alt={title}
            width={250}
            className="rounded-lf hover:scale-105 transition-all duration-500 ease-out "
          /></Link>
      </div>
      <div className="flex justify-between items-center">
        <span>
          {title.slice(0, 20)} {title.length > 20 ? "..." : null}
        </span>

        {pathname === "/favourites" ? (
          <MdDelete
            className="text-red-500 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => {
              removeFromFav({
                idMeal: id,
                strMeal: title,
                strMealThumb: image,
              });
              getFavourites(user._id).then((res) => dispatch(setFavourites(res)));
            }}
          />
        ) : (
          <HiHeart
            className="text-red-500 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer "
            onClick={() =>
              isAuth
                ? addToFav({
                  idMeal: id,
                  strMeal: title,
                  strMealThumb: image,
                })
                : toast.error("Please login to add to favourites")
            }
          />
        )}
      </div>
    </div>
  );
}

export default RecipeCard;

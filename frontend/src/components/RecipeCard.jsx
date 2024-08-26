import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { HiHeart } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function RecipeCard({ id, title, image }) {
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
        <img
          src={image}
          alt={title}
          width={250}
          className="rounded-lf hover:scale-105 transition-all duration-500 ease-out "
        />
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

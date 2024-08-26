import React, { useEffect, useState } from "react";
import { getFavourites } from "../../helper";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { setFavourites } from "../../slices/authSlice";

function Favourites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const favourites = useSelector((state) => state.auth.favourites)
  useEffect(() => {
    getFavourites(user._id).then((res) => dispatch(setFavourites(res)));
  }, []);

  return (
    <div className="my-10 flex justify-center items-center">
      <div className="lg:w-[70vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
        {favourites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;

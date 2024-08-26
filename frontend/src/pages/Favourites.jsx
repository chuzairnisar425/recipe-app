import React, { useEffect, useState } from "react";
import { getFavourites } from "../../helper";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    getFavourites(user._id).then((res) => setFavourites(res));
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

import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
function Home() {
  const [recipe, setRecipies] = useState([]);

  const getRecipies = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const data = await res.data;
    setRecipies(data.meals);
    console.log(data.meals);
  };
  useEffect(() => {
    getRecipies();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search the Ingrdient"
          className="outline-none border px-5 py-3 rounded-xl w-[60vw] shadow-md focus:border-red-500
        "
        />
      </div>
      <div className="my-10 w-[70-vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
        {recipe.map((recipe) => (
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

export default Home;

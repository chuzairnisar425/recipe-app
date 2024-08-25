import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { PuffLoader } from "react-spinners";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = async (text) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
      );
      const data = res.data;
      setRecipes(data.meals || []);
    } catch (error) {
      console.log("Error fetching recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  const getInitialRecipes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
      );
      const data = res.data;
      setRecipes(data.meals || []);
    } catch (error) {
      console.log("Error fetching initial recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInitialRecipes();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10">
        <input
          onChange={(e) => getRecipes(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Search the Ingredient"
          className="outline-none border px-5 py-3 rounded-xl w-[60vw] shadow-md focus:border-red-500"
        />
      </div>
      <div className="my-10">
        {loading ? (
          <PuffLoader color="#f56565" size={100} />
        ) : recipes.length === 0 ? (
          <h1>No recipes to show</h1>
        ) : (
          <div className="lg:w-[70vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

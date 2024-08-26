import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const getRecipeDetails = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = res.data;
    setDetails(data.meals[0]);
    console.log(data.meals);
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <div className="flex justify-center my-10  items-center">
      <div className="w-[60vw] p-3 bg-white" key={details?.idzMeal}>

        <div className="flex justify-evenly items-center">

          <img src={details?.strMealThumb} width={200} alt="" className="rounded-full" />
          <span className="text-2xl">{details.strMeal}</span>
        </div>
        <div className="my-3">
          <h1 className="text-xl font-semibold">Ingredients</h1>
          <p className="text-sm">{details?.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;

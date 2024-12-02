import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from the JSON file
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="list-disc list-inside mt-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Cooking Instructions</h2>
          <ol className="list-decimal list-inside mt-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="text-gray-600 mt-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;


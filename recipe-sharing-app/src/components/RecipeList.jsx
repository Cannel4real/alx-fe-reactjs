import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{recipe.title}
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;

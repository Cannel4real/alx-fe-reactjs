import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from 'components/useRecipeStore';
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
          </div>
        ))
      ) : (
        <p>No recipes added yet.</p>
      )}
    </div>
  );
};

export default RecipeList;

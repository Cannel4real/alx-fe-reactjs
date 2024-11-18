import React from 'react';
import useRecipeStore from '../UseRecipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete();
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

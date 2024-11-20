import React from 'react';
import useRecipeStore from 'components/useRecipeStore';
import { useNavigate } from 'react-router-dom';
const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/recipes'); // Navigate back to the recipes list after deletion
    if (onDelete) onDelete();
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

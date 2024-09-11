import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = recipesData.find((recipe) => recipe.id === parseInt(id));
    if (recipeDetail) {
      setRecipe(recipeDetail);
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Display while data is loading
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-6" />
      
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

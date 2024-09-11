import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = recipesData.find((recipe) => recipe.id === parseInt(id));
    if (recipeDetail) {
      setRecipe(recipeDetail);
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Simple fallback while loading data
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-6" />
      
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Sample Ingredients, replace with actual data */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p>
          {/* Sample instructions, replace with actual data */}
          Step 1: Do this. <br />
          Step 2: Do that. <br />
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;

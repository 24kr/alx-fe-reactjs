import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients || ingredients.split(',').length < 2) {
      newErrors.ingredients = 'At least two ingredients are required';
    }
    if (!steps) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = { title, ingredients: ingredients.split(','), steps };
      console.log('New Recipe:', newRecipe);
      // Reset form after submission
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <form className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Recipe Title</label>
        <input
          id="title"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">Ingredients (comma-separated)</label>
        <textarea
          id="ingredients"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">Preparation Steps</label>
        <textarea
          id="steps"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

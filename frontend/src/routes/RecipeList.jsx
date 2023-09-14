import React from "react";

function RecipeList() {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara" },
    { id: 2, title: "Chocolate Chip Cookies" },
    { id: 3, title: "Chicken Alfredo" },
  ];

  return (
    <div>
      <h1>RECIPES HERE</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

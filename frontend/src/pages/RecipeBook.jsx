import React from "react";
import RecipeList from "../routes/RecipeList";

function RecipeBook() {
  return (
    <div>
      <h1>COOKBOOK</h1>
      <RecipeList />
    </div>
  );
}

export default RecipeBook;






/*
import React, { useState, useEffect } from "react";
import RecipeList from "../routes/RecipeList";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1> RECIPES HERE </h1>
    </div>
  );
}

export default Recipes;
*/
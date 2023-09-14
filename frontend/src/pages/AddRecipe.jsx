import React, { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (save the recipe to a database)
    console.log("Recipe submitted:", title);
    setTitle("");
  };

  return (
    <div>
      <h1>ADD A NEW RECIPE!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;

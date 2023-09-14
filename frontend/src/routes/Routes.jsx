// Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import RecipeBook from "../pages/RecipeBook";
import AddRecipe from "../pages/AddRecipe";
import BlogPost from "../pages/BlogPost";

function NavRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/kitchen-diary" element={<BlogPost />} />
        <Route exact path="/recipes" element={<RecipeBook />} />
        <Route exact path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default NavRoutes;

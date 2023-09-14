import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import RecipeBook from "../pages/RecipeBook";
import AddRecipe from "../pages/AddRecipe";

function NavRoutes() {
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/recipes" component={RecipeBook} />
                <Route exact path="/add-recipe" component={AddRecipe} />
            </Routes>
        </Router>
    );
}

export default NavRoutes;

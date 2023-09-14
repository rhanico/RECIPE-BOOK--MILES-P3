import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/blog-post">KITCHEN'S DIARY</Link>
        </li>
        <li>
          <Link to="/recipes">COOK BOOK</Link>
        </li>
        <li>
          <Link to="/add-recipes">ADD RECIPE</Link>
        </li>
      </ul>
    </nav>

  );

}

export default Navbar;

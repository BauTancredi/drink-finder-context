import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const ListRecipes = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.idDrink} />
      ))}
    </div>
  );
};

export default ListRecipes;

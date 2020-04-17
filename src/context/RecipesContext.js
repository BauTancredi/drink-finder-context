import React, { createContext, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [search, searchRecipes] = useState({
    ingredient: "",
    category: "",
  });
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider value={{ searchRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;

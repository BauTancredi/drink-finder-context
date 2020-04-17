import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [search, searchRecipes] = useState({
    ingredient: "",
    category: "",
  });
  const [recipes, setRecipes] = useState([]);
  const [consult, setConsult] = useState(false);

  const { ingredient, category } = search;

  useEffect(() => {
    if (consult) {
      const fetchRecipes = async () => {
        const url = `https://thecocktaildb.com/api/json/v1/1/filter.php??i=${ingredient}&c=${category}`;
        axios(url).then((res) => {
          setRecipes(res.data.drinks);
        });
      };
      fetchRecipes();
    }
  });

  return (
    <RecipesContext.Provider value={{ searchRecipes, setConsult, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;

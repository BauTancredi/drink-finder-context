import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeInfo, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!idRecipe) return;
      const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      await axios(url).then((res) => setRecipe(res.data.drinks[0]));
    };
    fetchRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider value={{ setIdRecipe, recipeInfo, setRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

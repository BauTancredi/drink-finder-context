import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Create Context
export const CategoriesContext = createContext();

//Provider
const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const response = await axios.get(url);
      setCategories(response.data.drinks);
    };
    fetchCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

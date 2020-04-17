import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });

  const { categories } = useContext(CategoriesContext);
  const { searchRecipes, setConsult } = useContext(RecipesContext);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action=""
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks by category</legend>
      </fieldset>

      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="ingredient"
            className="form-control"
            placeholder="Search by Ingredients"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">-- Select category--</option>
            {categories.map((category) => (
              <option value={category.strCategory} key={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

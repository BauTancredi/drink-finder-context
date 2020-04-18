import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ recipe }) => {
  const { setIdRecipe, recipeInfo, setRecipe } = useContext(ModalContext);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showIngredeintes = (recipeInfo) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      console.log("for");
      if (recipeInfo[`strIngredients${i}`]) {
        ingredients.push(
          <li>
            {recipeInfo[`strIngredients${i}`]} {recipeInfo[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img className="card-img-top" src={recipe.strDrinkThumb} alt="" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            See recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              handleClose();
              setRecipe({});
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeInfo.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{recipeInfo.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recipeInfo.strDrinkThumb}
                alt=""
              />
              <h3>Ingredients</h3>
              <ul>{showIngredeintes(recipeInfo)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

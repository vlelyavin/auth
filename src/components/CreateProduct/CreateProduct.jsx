import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { Context } from "../..";
import { addNewProduct } from "../../actions/actions";

const getClasses = makeStyles(() => ({
  form: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    zIndex: "2",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
}));

export const CreateProduct = ({ handleClick }) => {
  const classes = getClasses();
  // const [state, setState] = useState()
  const [title, setTitle] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const { store } = useContext(Context);

  const addProduct = () => {
    store.dispatch(addNewProduct(title, manufacturer, categoryTitle));
  };

  return (
    <form className={classes.form}>
      <div className={classes.formContainer}>
        <Button onClick={handleClick} variant="contained" fullWidth>
          Back
        </Button>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        <TextField label="Category" value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} />
        <Button
          onClick={() => {
            addProduct();
            handleClick();
          }}
          variant="contained"
          fullWidth
        >
          Create
        </Button>
      </div>
    </form>
  );
};

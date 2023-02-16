import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { getProducts } from "../../actions/actions";
import { ProductList } from "../../components/ProductList";
import { CreateProduct } from "../../components/CreateProduct/CreateProduct";
// import { useSelector } from "react-redux";


const getClasses = makeStyles(() => ({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "1000px",
    background: "gray",
  },
}));

export const ProductListPage = () => {
  const classes = getClasses();

  const [formVisibilityStatus, showForm] = useState(false);

  const handleClick = () => {
    showForm(!formVisibilityStatus);
  };

  return (
    <>
      {formVisibilityStatus ? <CreateProduct handleClick={handleClick} /> : null}
      <div className={classes.list}>
        <Button variant="contained" onClick={handleClick}>
          Create
        </Button>
        <div className={classes.listContainer}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { ProductList } from "../../components/ProductList";
import { CreateProduct } from "../../components/CreateProduct/CreateProduct";

const getClasses = makeStyles(() => ({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    gap: "20px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "600px",
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

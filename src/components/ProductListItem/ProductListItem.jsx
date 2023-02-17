import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../..";
import { updateProduct, deleteProduct } from "../../actions/actions";
import { makeStyles } from "@mui/styles";

const getClasses = makeStyles({
  product: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#f2f2f2",
  },
  productInfoSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
});

export const ProductListItem = ({ product }) => {
  const classes = getClasses();

  const { store } = useContext(Context);

  const handleUpdate = (id) => {
    store.dispatch(updateProduct(id));
  };

  const handleDelete = (id) => {
    store.dispatch(deleteProduct(id));
  };
  return (
    <div key={product.id} className={classes.product}>
      <div className={classes.productInfoSection}>
        <div>{product.title}</div>
        <div>{product.manufacturer}</div>
        <div>{product.category.title}</div>
      </div>
      <div className={classes.productInfoSection}>
        <Button onClick={handleUpdate} variant="contained">
          Update
        </Button>
        <Button onClick={handleDelete} variant="contained">
          Delete
        </Button>
      </div>
    </div>
  );
};

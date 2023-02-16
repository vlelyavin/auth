import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../..";
import { getProducts } from "../../actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export const ProductList = () => {
  const { store } = useContext(Context);
  const products = useSelector(state => state.products);
  const handleClick = () => {};

  useEffect(() => {
    store.dispatch(getProducts());
    console.log(products);
  }, []);
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.title}</div>
          <div>{product.manufacturer}</div>
          <div>{product.category.title}</div>
          <Button onClick={handleClick} variant="contained">
            Update
          </Button>
          <Button onClick={handleClick} variant="contained">
            Delete
          </Button>
        </div>
      ))}
    </>
  );
};

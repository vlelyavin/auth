import { useContext } from "react";
import { Context } from "../..";
import { getProducts } from "../../actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem";

export const ProductList = ({ toggleFormVisibilityStatus }) => {
  const { store } = useContext(Context);
  const products = useSelector((state) => state.products);
  const loadingStatus = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (!loadingStatus) {
      store.dispatch(getProducts());
    }
  }, [loadingStatus]);

  return (
    <>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} toggleFormVisibilityStatus={toggleFormVisibilityStatus} />
      ))}
    </>
  );
};

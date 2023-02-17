import { useContext } from "react";
import { Context } from "../..";
import { getProducts } from "../../actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem/ProductListItem";

export const ProductList = () => {
  const { store } = useContext(Context);
  const products = useSelector((state) => state.products);
  const authenticationStatus = useSelector((state) => state.isAuthenticated);
  const loadingStatus = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (!loadingStatus) {
      console.log("FROM GET PROD" + authenticationStatus);
      store.dispatch(getProducts());
    }
  }, [loadingStatus]);

  return (
    <>
      {products.map((product) => (
        <ProductListItem product={product} />
      ))}
    </>
  );
};

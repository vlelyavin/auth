import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import { Context } from "../..";
import { getProducts } from "../../components/actions/actions";

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

export const List = () => {
  const classes = getClasses();

  const { store } = useContext(Context);

  useEffect(() => {
    store.dispatch(getProducts());
  }, []);
  return (
    <div className={classes.list}>
      <div className={classes.listContainer}>List</div>
    </div>
  );
};

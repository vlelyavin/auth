import { makeStyles } from "@mui/styles";

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
  return (
    <div className={classes.list}>
      <div className={classes.listContainer}>List</div>
    </div>
  );
};

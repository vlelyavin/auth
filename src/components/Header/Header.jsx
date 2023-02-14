import { makeStyles } from "@mui/styles";
import { Select } from "../Select/Select";

const getClasses = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  headerSelectContainer: {
    width: "120px",
  },
}));

export const Header = () => {
  const classes = getClasses();

  return (
    <header className={classes.header}>
      <p>Header</p>
      <div className={classes.headerSelectContainer}>
        <Select />
      </div>
    </header>
  );
};

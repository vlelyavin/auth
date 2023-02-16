import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Select } from "../Select/Select";
import { Logout } from "../Logout";

const getClasses = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  headerSelectContainer: {
    width: "120px",
  },
}));

export const Header = () => {
  const classes = getClasses();

  const authenticationStatus = useSelector((state) => state.isAuthenticated);

  return (
    <header className={classes.header}>
      {authenticationStatus ? <Logout /> : null}
      <div className={classes.headerSelectContainer}>
        <Select />
      </div>
    </header>
  );
};

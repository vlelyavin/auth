import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import { loginRequest } from "../actions/actions";

const getClasses = makeStyles(() => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  },

  formButton: {
    width: "100%",
    height: "45px",
  },
}));

export const Login = () => {
  const classes = getClasses();

  const { t } = useTranslation();

  const { store } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    store.dispatch(loginRequest(username, password));
  };

  return (
    <form className={classes.form}>
      <TextField label={t("login")} value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label={t("password")} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/list">
        <Button className={classes.formButton} onClick={handleClick} variant="contained" fullWidth>
          {t("loginButton")}
        </Button>
      </Link>
    </form>
  );
};

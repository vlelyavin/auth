import { $api } from "../../http";

export const AuthService = {
  login: (login, password) => {
    return $api.post("/auth/login", { login, password });
  },

  register: (login, password) => {
    return $api.post("/auth/register", { login, password });
  },

  logout: () => {
    return $api.post("/auth/refresh");
  },
};

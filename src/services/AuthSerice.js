import { $api } from "../http";

export const AuthService = {
  login: (username, password) => {
    return $api.post("/auth/login", { username, password });
  },

  register: (username, password) => {
    return $api.post("/auth/register", { username, password });
  },

  refresh: () => {
    return $api.get("/auth/refresh", { withCredentials: true });
  },

  getProducts: () => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("token"),
      },
    };
    return $api.get("/product/list", config);
  },
};